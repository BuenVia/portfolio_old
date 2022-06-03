const paymentType = document.getElementById('paymentType')
const amount = document.getElementById('amount')
const category = document.getElementById('category')
const company = document.getElementById('company')
const date = document.getElementById('date')
const submit = document.getElementById('submit')
const clear = document.getElementById('clear')
const outputContainer = document.getElementById('outputContainer')
const totalSpent = document.getElementById('totalSpent')
const totalDebit = document.getElementById('totalDebit')
const totalCredit = document.getElementById('totalCredit')

let items = localStorage.getItem('finance') ? JSON.parse(localStorage.getItem('finance')) : []


submit.addEventListener('click', process)
clear.addEventListener('click', clearItems)

items.forEach(createNewItem)

function process() {
    createArray()
    calcSpent()
}

function createArray() {
    if (paymentType.value === '' || amount.value === '' || category.value === '' || company.value === '' || date.value === '') {
        alert('Please ensure all details are entered correctly')
    } else {

        let itemObj = {
            'amount': amount.value, 
            'type': paymentType.value,
            'category': category.value,
            'company': company.value,
            'date': date.value
        }
        items.push(itemObj)
        localStorage.setItem('finance', JSON.stringify(items))
        createNewItem(items[items.length - 1])
    }

}

function createNewItem(text) {
        const divNewItem = document.createElement('div')
        const pNewAmount = document.createElement('div')
        const pNewType = document.createElement('div')
        const pNewCat = document.createElement('div')
        const pNewCom = document.createElement('div')
        const pNewDate = document.createElement('div')
        const pRemove = document.createElement('div')
        const indexPos = items.indexOf(text)

        divNewItem.classList.add('new-item')
        // FIX CREDIT/ DEBIT COLOR - because array is creating object
        if(text.type === 'DEBIT') {
            pNewAmount.innerText = `-$${text.amount}`
            pNewAmount.style.color = 'var(--txt-three)'
        } else {
            pNewAmount.innerText = `+$${text.amount}`
            pNewAmount.style.color = 'var(--txt-two)'
        }
        pNewType.innerText = text.type
        pNewCat.innerText = text.category.toUpperCase()
        pNewCom.innerText = text.company.toUpperCase()
        pNewDate.innerText = text.date
        pRemove.innerHTML = 'x'
        pRemove.classList = 'remove'

        pRemove.onclick = removeItem

        divNewItem.appendChild(pNewAmount)
        divNewItem.appendChild(pNewType)
        divNewItem.appendChild(pNewCat)
        divNewItem.appendChild(pNewCom)
        divNewItem.appendChild(pNewDate)
        divNewItem.appendChild(pRemove)
        divNewItem.id = indexPos

        outputContainer.appendChild(divNewItem)

}

function calcSpent() {
    let debit = 0
    let credit = 0
    let spent = 0
    for (let i = 0; i < items.length; i++) {
        if (items[i].type === 'DEBIT') {
            debit += parseFloat(items[i].amount)
        } else if (items[i].type === 'CREDIT') {
            credit += parseFloat(items[i].amount)
        }
    }

    spent = (debit - credit)

    totalSpent.innerText = `$${spent}`
    totalDebit.innerText = `-$${debit}`
    totalDebit.style.color = 'var(--txt-three)'
    totalCredit.innerText = `+$${credit}`
    totalCredit.style.color = 'var(--txt-two)'
    console.log(spent, debit, credit);
}
calcSpent()

function removeItem() {
    const x = this.parentNode.id
    items.splice(x, 1)
    localStorage.setItem('finance', JSON.stringify(items))
    console.log(items)
    this.parentNode.remove()
    calcSpent()
}

function clearItems() {
    localStorage.clear()
    outputContainer.innerHTML = ''
    totalSpent.innerText = '$0'
    totalDebit.innerText = '$0'
    totalCredit.innerText = '$0'
}

function todayDate() {
    const todayDate = new Date()
    let day = todayDate.getDay()
    let month = todayDate.getMonth() + 1
    let year = todayDate.getFullYear()
    day = addZero(day)
    month = addZero(month)

    function addZero(x) {
        if (x < 10) {
            x = '0' + x
        }
        return x
    }
    date.value = year + '-' + month + '-' + day
}

todayDate()