const API = {
  getJournalEntries() {
    return fetch("http://localhost:3000/journalEntries")
      .then(entries => entries.json())
  }
}


// NOTE: getJournalEntries() { 
// on line 2 is the same as writing 
// getJournalEntries: function () { 
  