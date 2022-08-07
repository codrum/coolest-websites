import data from './data.js'
let id = 1

document.getElementById('add').addEventListener('click', () => {
	let table = document.getElementById('website-list')
	let row = table.insertRow(-1) // inserts at end of table
	row.setAttribute('id', `item-${id}`)
	row.insertCell(0).innerHTML = document.getElementById('inputTitle').value
	let truncatedCell = row.insertCell(1)
	truncatedCell.innerHTML = document.getElementById('inputDescription').value
	truncatedCell.classList.add('truncated-table')
	const radioButtons = document.getElementsByName('inlineRadioOptions')
	let selectedRating
	for (const radioButton of radioButtons) {
		if (radioButton.checked) {
			selectedRating = radioButton.value
			break
		}
	}
	row.insertCell(2).innerHTML = selectedRating += ' stars'
	const url = document.getElementById('inputUrl').value
	row.insertCell(
		3
	).innerHTML = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">${url}</a>`
	let actions = row.insertCell(4)
	actions.appendChild(createDeleteButton(id++))
})

const createDeleteButton = (id) => {
	let btn = document.createElement('button')
	btn.className = 'btn btn-primary'
	btn.id = id
	btn.innerHTML = 'Delete'
	btn.onclick = () => {
		console.log('deleting row with id item-' + id)
		let elementToDelete = document.getElementById(`item-${id}`)
		elementToDelete.parentNode.removeChild(elementToDelete)
	}
	return btn
}

console.log(data)
for (let item of data) {
	let table = document.getElementById('website-list')
	let row = table.insertRow(-1) // inserts at end of table
	row.setAttribute('id', `item-${id}`)
	row.insertCell(0).innerHTML = item.title
	let truncatedCell = row.insertCell(1)
	truncatedCell.innerHTML = item.description
	truncatedCell.classList.add('truncated-table')

	row.insertCell(2).innerHTML = item.rating += ' stars'
	row.insertCell(
		3
	).innerHTML = `<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">${item.url}</a>`
	let actions = row.insertCell(4)
	actions.appendChild(createDeleteButton(id++))
}
