// Import modules from other files
import API from "./data.js"
import entryComponent from "./entryComponent.js"
import entriesDOM from "./entriesDOM.js"

// Store DOM node references in variables
const dateInput = document.querySelector("#journalDate")
const conceptsInput = document.querySelector("#conceptsCovered")
const entryInput = document.querySelector("#entryText")
const moodSelect = document.querySelector("#mood")
const inputsArray = [dateInput, conceptsInput, entryInput, moodSelect]
const recordJournalEntryBtn = document.querySelector("#submit-btn")

const moodOptions = document.querySelectorAll(".mood-radio")
const searchBtn = document.querySelector("#search-btn")


// Get journal entries initially and render to DOM
const getAllJournalEntries = () => {
    API.getJournalEntries().then((parsedEntries) => {
        parsedEntries.forEach(entry => {
            const newEntryString = entryComponent.makeJournalEntryComponent(entry)
            entriesDOM.addEntryToHtml(newEntryString)
        })
    })
}

getAllJournalEntries()

// Object that is created to be added to the json file when a new entry is saved
const createEntryObject = (date, concepts, entry, mood) => {
    return {
        date: date.value,
        concepts: concepts.value,
        entry: entry.value,
        mood: mood.value
    }
}

// Check input fields to ensure they are not empty and include acceptable characters. Returns a boolean.
const dataValidation = () => {
    let validated
    for (let i = 0; i < inputsArray.length; i++) {
        const input = inputsArray[i]
        // Regular expression:
        const pattern = /[^A-z0-9(){}:;.,?! ]/g
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
recordJournalEntryBtn.addEventListener("click", () => {
    if (dataValidation()) {
        const newJournalEntryObj = createEntryObject(dateInput, conceptsInput, entryInput, moodSelect)
        document.querySelector(".entryLog").innerHTML = ""
        API.saveJournalEntries(newJournalEntryObj)
            .then(getAllJournalEntries)
    }
})

// Instead of making another http request to get the new entry, 
// could create a local array, get the data from the API, 
// set local array equal to the data from the API,
// save the new journal entry to the API,
// push the new entry to the local array, 
// and re-render entries to the DOM

// Add event listener to filter entries by mood
searchBtn.addEventListener("click", () => {
    moodOptions.forEach(mood => {
        if (mood.checked && mood.value !== "See-All") {
            document.querySelector(".entryLog").innerHTML = ""
            API.filterJournalEntries(mood.value)
                .then((entries) => {
                    entries.forEach(entry => {
                        const newEntryString = entryComponent.makeJournalEntryComponent(entry)
                        entriesDOM.addEntryToHtml(newEntryString)
                    })
                })
        } else if (mood.checked && mood.value === "See-All") {
            getAllJournalEntries()
        }
    })
})


