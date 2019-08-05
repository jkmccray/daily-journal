const dateInput = document.querySelector("#journalDate")
const conceptsInput = document.querySelector("#conceptsCovered")
const entryInput = document.querySelector("#entryText")
const moodSelect = document.querySelector("#mood")
const submitBtn = document.querySelector("#submit-btn")

const inputsArray = [dateInput, conceptsInput, entryInput, moodSelect]

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
    let newJournalEntry = {}
    for (let i = 0; i < inputsArray.length; i++) {
        const input = inputsArray[i]
        const pattern = /[^A-z0-9(){}:;., ]+/g
        if (input.value === "") {
            alert("Please fill out all fields")
            console.log(newJournalEntry)
            break
        } else if (pattern.test(input.value) && input !== dateInput) {
            alert("Only letters, numbers, (), {}, :, and ; permitted")
            break
        } else {
            newJournalEntry = createEntryObject(dateInput, conceptsInput, entryInput, moodSelect)
        }
    }
    
    // if (newJournalEntry.mood !== "") {
    //     inputsArray.forEach(input => input.value = "")
    //     entryLogContainer.innerHTML = ""
    //     API.saveJournalEntries(newJournalEntry)
    //         .then(() => API.getJournalEntries())
    //         .then((parsedEntries) => {
    //             entriesDOM.addToHtml(parsedEntries)
    
    //         })
    // }

})


