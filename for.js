//for

    for(let i = 10; i != 0; i--){
    if (i ==5){
        break;
    }
    console.log("numero "+i)
}

//for...of

let name = "ismael"
for(let char of name){
    console.log(char)
}

//for...in

let object = {
    name: "ismael",
    age: 25,
    weight: 66.8
}

for(let i in object){
    console.log(i)
    console.log(object[i])
}

