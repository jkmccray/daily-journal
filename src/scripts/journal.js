// Import modules from other files
import API from "./data.js"
import entryComponent from "./entryComponent.js"
import entriesDOM from "./entriesDOM.js"

const dateInput = document.querySelector("#journalDate")
const conceptsInput = document.querySelector("#conceptsCovered")
const entryInput = document.querySelector("#entryText")
const moodSelect = document.querySelector("#mood")
const submitBtn = document.querySelector("#submit-btn")

const inputsArray = [dateInput, conceptsInput, entryInput, moodSelect]

// Get journal entries initially and render to DOM
API.getJournalEntries().then((parsedEntries) => {
    parsedEntries.forEach(entry => {
        const newEntryString = entryComponent.makeJournalEntryComponent(entry)
        entriesDOM.addToHtml(newEntryString)
    })
})

// Object that is created to be added to the json file when a new entry is saved
const createEntryObject = (date, concepts, entry, mood) => {
    return {
        "date": date.value,
        "concepts": concepts.value,
        "entry": entry.value,
        "mood": mood.value
    }
}

// Check input fields to ensure they are not empty and include acceptable characters. Returns a boolean.
const dataValidation = () => {
    let validated
    for (let i = 0; i < inputsArray.length; i++) {
        const input = inputsArray[i]
        // Regular expression:
        const pattern = /[^A-z0-9(){}:;.,?! ]+/g            
        if (input.value === "") {
            validated = false
            alert("Please fill out all fields")
            break
        } else if (pattern.test(input.value) && input !== dateInput) {
            validated = false
            alert("Only letters, numbers, (), {}, :, and ; permitted")
            break
        } else {
            validated = true
        }
    }
    return validated
}

// Add event listener to "Record Journal Entry" button. 
// If input values pass validation:
// create a new journal entry object
// clear the entry log container
// post the new entry object to the json file
// get all of the entries from the json file again
// render the entries to the DOM
submitBtn.addEventListener("click", () => {
    if (dataValidation()) {
        const newJournalEntryObj = createEntryObject(dateInput, conceptsInput, entryInput, moodSelect)
        entryLogContainer.innerHTML = ""
        API.saveJournalEntries(newJournalEntryObj)
            .then(() => API.getJournalEntries())
            .then((parsedEntries) => {
                entriesDOM.addToHtml(parsedEntries)
                inputsArray.forEach(input => input.value = "")
            })
    }
})


