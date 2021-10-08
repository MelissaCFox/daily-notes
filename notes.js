const searchTerm = 10

const notes = [
    {
        id: 1,
        subject: "Javascript data types and structures",
        date: "Oct 5, 2021",
        feeling: "very comfortable",
        timeSpent: 5
    },
    {
        id: 2,
        subject: "Manipulating object properties",
        date: "Oct 5, 2021",
        feeling: "comfortable",
        timeSpent: 10
    }
]

const newNote = {
    id: 3,
    subject: "Practicing skills with daily notes task",
    date: "Oct 5, 2021",
    feeling: "very comfortable",
    timeSpent: 10
}

notes.push(newNote)

// console.log(notes)

// for (const note of notes) {
//     console.log(`Note ${note.id}
// ${note.date}
// ${note.subject}`)
// }

// const test = {
//     id: 3,
//     subject: "Practicing skills with daily notes task",
//     date: "Oct 5, 2021",
//     feeling: "very comfortable",
//     timeFrame: 1,
//     ageRange: [7, 8, 9, 10]
// }

// console.log(test.ageRange[2])

// for (const note of notes) {
//     if (note.timeSpent === searchTerm) {
//         console.log(note.subject)
//     }
// }

const createNote = (note) => {
    const lastIndex = notes.length -1
    const currentLastNote = notes[lastIndex]
    const maxId = currentLastNote.id
    const idForNewNote = maxId + 1
    note.id = idForNewNote

    note.dateCreated = Date.now()

    notes.push(note)
}

const newerNote = {
    subject: "Finished Daily Notes and Meal Planner Projects",
    date: "Oct 6, 2021",
    feeling: "very comfortable",
    timeSpent: 20
}

createNote(newerNote)

for (const note of notes) {
    console.log(notes)
}
