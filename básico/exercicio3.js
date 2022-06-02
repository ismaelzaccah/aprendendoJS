function hasChar(stringToCheck, char)
{
    let checked = stringToCheck.includes(char.toLowerCase()) || stringToCheck.includes(char.toUpperCase())
    return checked
}

function tempConvert(tempString)
{
    let tempNumber = parseFloat(tempString)
    let tempF = hasChar(tempString, "F")
    let tempC = hasChar(tempString, "C")
    
    if(tempF)
    {
        tempNumber = (tempNumber - 32) * 5/9
        return tempNumber.toFixed(1) + " °C"
    }
    else if(tempC)
    {
        tempNumber = tempNumber * 9/5 + 32
        return tempNumber.toFixed(1) + " °F"
    }
    else if(!tempF && !tempF)
    {
        return "Temperatura com Formato Inválido"
    }
}

console.log(tempConvert("50f"))