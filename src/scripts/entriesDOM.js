
const entryLogContainer = document.querySelector(".entryLog")

const entriesDOM = {
  addToHtml(newEntryString) {
      entryLogContainer.innerHTML += newEntryString
    }
}


export default entriesDOM