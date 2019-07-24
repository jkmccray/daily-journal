const entryLogContainer = document.querySelector(".entryLog")

const entriesDOM = {
  addToHtml(parsedEntries) { 
      parsedEntries.forEach(entry => {
        const newEntryString = entryComponent.makeJournalEntryComponent(entry)
        entryLogContainer.innerHTML += newEntryString
      })
    }
  }


  