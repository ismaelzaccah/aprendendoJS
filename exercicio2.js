let family = {
    incomes: [1500,300,220,65,100,90],
    expenses: [930,85,130,99,65,210,240]
}

function sumArrayItems(array){
    let total = new Number
    for(let item of array){
        total += item
    }
    return total
}
function getBalance(object){
    let total = sumArrayItems(object.incomes) - sumArrayItems(object.expenses)
    if(total>0)
        return `Saldo Positivo : R$ ${total}`
    else if(total<0)
        return `Saldo Negativo : R$ ${total}`
}

console.log(getBalance(family))