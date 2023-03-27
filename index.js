//this is the TODO APP

let array = read() || []
//     {
//     name: 'boruto',
//     theory: 'Will have a jougan',
//     strong: true
// },
// {
//     name: 'kawaki',
//     theory: 'will be a villain',
//     strong: true
// },
// {
//     name: 'mitsuki',
//     theory: 'will become strong af',
//     strong: false
// },
// {
//     name: 'sarada',
//     theory: 'will become strong',
//     strong: false
// },
// {
//     name: 'sasuke',
//     theory: 'will not die, if dies, will die like a chad',
//     strong: true
// },
// {
//     name: 'naruto',
//     theory: 'OP,resting in a different dimension',
//     strong: false
// }


let spaceForNotes = {
    searchNote : '',
    hideStrong : ''
}





search(array,spaceForNotes)

document.querySelector('.inp').addEventListener('input', function(e){
    spaceForNotes.searchNote = e.target.value
    search(array,spaceForNotes)
})

document.querySelector('.form').addEventListener('submit', function(e){
    e.preventDefault()
    array.push({
        id : uuidv4(),
        name : e.target.elements.addNote.value,
        strong : false
    })
    
    console.log(array)
    savingNote(array)
    search(array, spaceForNotes)
    e.target.elements.addNote.value = ''
})

document.querySelector('.checkbox').addEventListener('change', function(e){
    console.log(e.target.checked)
    spaceForNotes.hideStrong = e.target.checked
    search(array,spaceForNotes)
})
    