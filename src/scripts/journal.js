const dateInput = document.querySelector("#journalDate")
const conceptsInput = document.querySelector("#conceptsCovered")
const entryInput = document.querySelector("#entryText")
const moodSelect = document.querySelector("#mood")
const submitBtn = document.querySelector("#submit-btn")
API.getJournalEntries().then((parsedEntries) => { entriesDOM.addToHtml(parsedEntries) })

const createEntryObject = (date, concepts, entry, mood) => {
    return {
        "date": date.value,
        "concepts": concepts.value,
        "entry": entry.value,
        "mood": mood.value
    }

}


submitBtn.addEventListener("click", () => {
    const newJournalEntry = createEntryObject(dateInput, conceptsInput, entryInput, moodSelect)
    API.saveJournalEntries(newJournalEntry)
    
    dateInput.value = ""
    conceptsInput.value = ""
    entryInput.value = ""
    moodSelect.value = ""

    // .then(API.getJournalEntries()).then((parsedEntries) => { entriesDOM.addToHtml(parsedEntries) })
})


