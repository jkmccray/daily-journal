import entryComponent from "./entryComponent.js"

const entryLogContainer = document.querySelector(".entryLog")

const entriesDOM = {
  renderToDOM(entries) {
    entries.forEach(entryObj => {
      const newEntryString = entryComponent.makeJournalEntryComponent(entryObj)
      entryLogContainer.innerHTML += newEntryString
    });
  }
}


export default entriesDOM