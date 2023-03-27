// console.log(uuidv4())

//reading data from localStorage

let read = function () {
    let arrayJSON = localStorage.getItem('array')
    if (arrayJSON !== null) {
        return JSON.parse(arrayJSON)
    }
    else {
        return []
    }
}

//saving note to localStorage

let savingNote = function () {
    localStorage.setItem('array', JSON.stringify(array))
}

//removing an item
let removeItem = function (id) {
    let removeIndex = array.findIndex(function (item) {
        return item.id === id
    })

    if (removeIndex > -1) {
        array.splice(removeIndex, 1)
    }
}

//toggling the check value of the checkbox

let toggleStrongValue = function(id){//this code allows to turn the strong value of item to strong upon clicking he checkbox and vice-versa.
    let item = array.find(function(item){
        return item.id === id
    })
    if(item !== undefined){
        item.strong = !item.strong
    }
}

//adding item names

let addingItemNames = function (item) {
    let newDiv = document.createElement('div')

    //creating a button

    let button = document.createElement('button')
    button.textContent = 'remove'
    button.addEventListener('click', function (e) {
        removeItem(item.id)
        savingNote(array)
        search(array, spaceForNotes)
    })

    //creating a checkbox

    let checkbox = document.createElement('input')
    checkbox.setAttribute('type', 'checkbox')
    checkbox.checked = item.strong

    checkbox.addEventListener('change', function(e){
        toggleStrongValue(item.id)
        savingNote(array)
        search(array,spaceForNotes)
    })

    //creating a span

    let p = document.createElement('span')
    if (item.name.length > 0) {
        p.textContent = item.name
    }
    else {
        p.textContent = 'unnamed note'
    }
    newDiv.appendChild(checkbox)
    newDiv.appendChild(p)
    newDiv.appendChild(button)
    return newDiv



}

let search = function (array, spaceForNotes) {
    let searching = array.filter(function (item) {
        return item.name.toLowerCase().includes(spaceForNotes.searchNote.toLowerCase())

    })
    searching = searching.filter(function (item) {
        if (spaceForNotes.hideStrong) {
            return !item.strong
        }
        else {
            return true
        }
    })
    let isNotStrong = searching.filter(function (item) {
        return !item.strong
    })


    document.querySelector('.division').innerHTML = ''
    let h2 = numberOfWeakCharacters(isNotStrong)

    document.querySelector('.division').appendChild(h2)

    searching.forEach(function (item) {
        let p = addingItemNames(item)


        document.querySelector('.division').appendChild(p)
    })
}



//adding heading for number of weak characters

let numberOfWeakCharacters = function (isNotStrong) {
    let h2 = document.createElement('h2')
    h2.textContent = `There are ${isNotStrong.length} tasks left`
    return h2
}



