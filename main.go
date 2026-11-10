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

// AppState stores the complete unified state (Productivity + Health & Life Balance)
type AppState map[string]interface{}

var (
	dataFile = "icando_data.json"
	mu       sync.RWMutex
)

func main() {
	mux := http.NewServeMux()
	mux.HandleFunc("/api/sync", handleSync)

	fs := http.FileServer(http.Dir("./public"))
	mux.Handle("/", fs)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	fmt.Printf("Sahand I CanDo — Personal Performance & Life Balance OS running on http://localhost:%s\n", port)
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
		state["updatedAt"] = time.Now().Format(time.RFC3339)
		bytes, err := json.MarshalIndent(state, "", "  ")
		if err != nil {
			http.Error(w, err.Error(), http.StatusInternalServerError)
			return
		}
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
