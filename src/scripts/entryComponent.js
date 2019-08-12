const entryComponent = {
  makeJournalEntryComponent(journalEntryObj) {
    return `
    <section class="eachEntry">
      <header class="entryHeader">
      <div class="date-and-delete">
      <h1 class="date">Date: ${journalEntryObj.date}</h1>
      <button class="edit-btn" id="editBtn--${journalEntryObj.id}">Edit</button>
      <button class="delete-btn" id="deleteBtn--${journalEntryObj.id}">Delete</button>
      </div>
      <h2 class="concepts">${journalEntryObj.concepts}</h2>
      </header>
      <div class="entryAndMood">
        <p class="entry">${journalEntryObj.entry}</p>
        <div class="mood">Mood: ${journalEntryObj.mood}</div>
      </div>
    </section>
  `
  }
}

export default entryComponent