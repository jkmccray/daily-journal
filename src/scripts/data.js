const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/journalEntries")
      .then(entries => entries.json())
  },
  saveJournalEntries(entryObj) {
    return fetch("http://localhost:3000/journalEntries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(entryObj)
    })
  }
}

// NOTE: getJournalEntries() { 
// on line 2 is the same as writing 
// getJournalEntries: function () { 
  

