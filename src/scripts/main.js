const entryLogContainer = document.querySelector(".entryLog")
const makeJournalEntryComponent = (journalEntry) => {
  // Create your own HTML structure for a journal entry
  return `
    <section class="eachEntry">
      <h1 class="date">Date: ${journalEntry.date}</h1>
      <h2 class="concepts">${journalEntry.concepts}</h2>
      <p class="entry">${journalEntry.entry}</p>
      <div class="mood">Mood: ${journalEntry.mood}</div>
    </section>
  `
}

const renderJournalEntries = (entries) => {
  entries.forEach(entry => {
    const newEntryString = makeJournalEntryComponent(entry)
    entryLogContainer.innerHTML += newEntryString
  });
}

// Invoke the render function
renderJournalEntries(journalEntries)