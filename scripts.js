const modal = {
    open() {
        document.querySelector('.modal-overlay')
        .classList.add('active')
    },
    close() {
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
]



const balance = {
    incomes() {

    },
    expenses(){

    },
    total () {

    }
}

const DOM = {
    transactionsContainer : document.querySelector('#data-table tbody'),

        addTransaction(transaction, index) {
            console.log(transaction)
            const tr = document.createElement('tr')
            tr.innerHTML = DOM.innerHtmlTransaction(transaction)

            DOM.transactionsContainer.appendChild(tr)
        },
        innerHtmlTransaction(transaction) {


            const html = ` 
                <td class="description">${transaction.description}</td>
                <td class="expense">${transaction.amount}</td>
                <td class="date">${transaction.date}</td>
                <td>
                    <img src="/MaratonaDiscover/assets/minus.svg" alt="Remover">
                </td>
            `

            return html
    }
}

DOM.addTransaction(transactions[2])