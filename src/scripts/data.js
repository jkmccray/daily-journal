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
  },
  filterJournalEntries(radioBtnValue) {
    return fetch(`http://localhost:3000/journalEntries?mood=${radioBtnValue}`)
      .then(entries => entries.json())
  },
  deleteJournalEntry(deleteBtnId) {
    return fetch(`http://localhost:3000/journalEntries/${deleteBtnId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
  },
  getSingleJournalEntry(entryId) {
    return fetch(`http://localhost:3000/journalEntries/${entryId}`)
      .then(entries => entries.json())
  },
  editJournalEntry(entryObj, editBtnId) {
    return fetch(`http://localhost:3000/journalEntries/${editBtnId}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify(entryObj)
    })
  }
}

// NOTE: getJournalEntries() { 
// on line 2 is the same as writing 
// getJournalEntries: function () { 


export default API