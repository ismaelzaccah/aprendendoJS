function letterScore(score){
    
    if(score<0 || score>100 || isNaN(score))
        return "Nota Inválida"
    else if(score>=90)       return "A"
    else if(score>=80)       return "B"
    else if(score>=70)       return "C"
    else if(score>=60)       return "D"
    else if(score <60)       return "F"
}
console.log(letterScore(110))
console.log(letterScore(-1))
console.log(letterScore(0))
console.log(letterScore(55))
console.log(letterScore(65))
console.log(letterScore(75))
console.log(letterScore(85))
console.log(letterScore(95))
console.log(letterScore(100))
console.log(letterScore(undefined))

