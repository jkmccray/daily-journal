const entryLogContainer = document.querySelector(".entryLog")

const addToHtml = parsedEntries => {
  parsedEntries.forEach(entry => {
    const newEntryString = makeJournalEntryComponent(entry)
    entryLogContainer.innerHTML += newEntryString
  })
}