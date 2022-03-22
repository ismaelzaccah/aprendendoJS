function sayName(name){
    if(name === ""){
        throw new Error("Nome é Obrigatório")
    }
    console.log("após o throw dentro da function")

}

try{
    sayName("Ismael")
} catch(e){
    console.log(e)
}