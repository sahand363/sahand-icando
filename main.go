package main

import (
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"sync"
	"time"
)

// AppState represents the unified personal operating system state
type AppState struct {
	Mission       Mission        `json:"mission"`
	Tasks         []Task         `json:"tasks"`
	Goals         []Goal         `json:"goals"`
	FocusSessions []FocusSession `json:"focusSessions"`
	SleepLogs     []SleepLog     `json:"sleepLogs"`
	StreakDays    int            `json:"streakDays"`
	RecoveryMode  bool           `json:"recoveryMode"`
	UpdatedAt     time.Time      `json:"updatedAt"`
}

type Mission struct {
	Title    string `json:"title"`
	Progress int    `json:"progress"`
}

type Task struct {
	ID        int    `json:"id"`
	Title     string `json:"title"`
	Priority  string `json:"priority"` // "main", "secondary", "optional"
	Duration  string `json:"duration"`
	Completed bool   `json:"completed"`
}

type Goal struct {
	ID         int    `json:"id"`
	Title      string `json:"title"`
	Horizon    string `json:"horizon"` // "year", "quarter", "month", "week"
	Category   string `json:"category"`
	Progress   int    `json:"progress"`
	Milestones string `json:"milestones"`
}

type FocusSession struct {
	ID        int       `json:"id"`
	TaskTitle string    `json:"taskTitle"`
	Duration  int       `json:"duration"` // in minutes
	Notes     string    `json:"notes"`
	Timestamp time.Time `json:"timestamp"`
}

type SleepLog struct {
	Date     string  `json:"date"`
	Duration string  `json:"duration"`
	Quality  float64 `json:"quality"`
}

var (
	dataFile = "icando_data.json"
	mu       sync.RWMutex
)

func main() {
	mux := http.NewServeMux()

	// API Route for syncing/backing up state
	mux.HandleFunc("/api/sync", handleSync)

	// Serve Frontend Static Files from ./public
	fs := http.FileServer(http.Dir("./public"))
	mux.Handle("/", fs)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Sahand I CanDo — Personal OS Server running on http://localhost:%s\n", port)
	log.Fatal(http.ListenAndServe(":"+port, enableCORS(mux)))
}

func handleSync(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method == http.MethodGet {
		mu.RLock()
		defer mu.RUnlock()
		data, err := os.ReadFile(dataFile)
		if err != nil {
			w.WriteHeader(http.StatusOK)
			w.Write([]byte(`{"status":"empty"}`))
			return
		}
		w.Write(data)
		return
	}

	if r.Method == http.MethodPost {
		mu.Lock()
		defer mu.Unlock()
		var state AppState
		if err := json.NewDecoder(r.Body).Decode(&state); err != nil {
			http.Error(w, err.Error(), http.StatusBadRequest)
			return
		}
		state.UpdatedAt = time.Now()
		bytes, _ := json.MarshalIndent(state, "", "  ")
		_ = os.WriteFile(dataFile, bytes, 0644)

		w.WriteHeader(http.StatusOK)
		w.Write([]byte(`{"status":"saved"}`))
		return
	}

	http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
}

func enableCORS(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
		w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
		if r.Method == "OPTIONS" {
			w.WriteHeader(http.StatusOK)
			return
		}
		next.ServeHTTP(w, r)
	})
}
