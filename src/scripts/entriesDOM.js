
const entryLogContainer = document.querySelector(".entryLog")

const entriesDOM = {
  addEntryToHtml(newEntryString) {
      entryLogContainer.innerHTML += newEntryString
    }
}


export default entriesDOM