//TODO
// format numbers
// lei si % dupa numerele rezultate
// calcul taxe salariu pe luna / 3 luni

// Nice to have
// salariu nu trebuie sa fie neaparat minimul pe economie 


document.querySelector('button').addEventListener('click', e => {
    e.preventDefault()

    // Inputs 
    const inputVenitTotal =document.querySelector('#venit-total').value
    const inputNumarAngajati = document.querySelector('#numar-angajati').value
    const inputCheltuieli = document.querySelector('#cheltuieli').value

    // taxe salariati
    const TAXA_ANGAJAT_AN = 12996
    const taxeAngajat = document.querySelector('#taxe-angajati')
    taxeAngajat.textContent = TAXA_ANGAJAT_AN * inputNumarAngajati
    
    // impozit venit - 1% din profit
    const profit = document.querySelector('#profit')
    const impozitProfit = document.querySelector('#impozit-profit')
    profit.textContent = renderSubstract(inputVenitTotal, inputCheltuieli)
    impozitProfit.textContent = renderPercent(profit.textContent, 1)
    
    // taxe salariati + impozit profit
    const taxe = document.querySelector('#taxe')
    taxe.textContent = renderSum(taxeAngajat, impozitProfit) // merge

    const dividendeNeimpozitate = document.querySelector('#dividende-neimpozitate')
    dividendeNeimpozitate.textContent = renderSubstractTextContent(profit, taxe)

    // impozit dividende
    const impozitDividende = document.querySelector('#impozit-dividende')
    impozitDividende.textContent = renderPercent(dividendeNeimpozitate.textContent, 8)
    
    // DIVIDENDE Finale
    const dividende = document.querySelector('#dividende')
    dividende.textContent = renderSubstractTextContent(dividendeNeimpozitate, impozitDividende)

    //Total taxe platite la stat
    const totalTaxe = document.querySelector('#total-taxe')
    const procentTotalTaxe = document.querySelector('#procent-total-taxe')
    totalTaxe.textContent = renderSum(taxe, impozitDividende)
    procentTotalTaxe.textContent = renderPercentage(totalTaxe.textContent, inputVenitTotal)
})

function renderSubstract(a, b) {
    return (a - b).toFixed(2)
}

function renderSubstractTextContent(a, b) {
    return (parseFloat(a.textContent) - parseFloat(b.textContent)).toFixed(2)
}

function renderSum(a, b) {
    return (parseFloat(a.textContent) + parseFloat(b.textContent)).toFixed(2)
}

function renderPercent(a, b) {
    return ((a / 100) * b).toFixed(2)
}

function renderPercentage(partialValue, totalValue) {
    return ((100 * partialValue) / totalValue).toFixed(2)
}