function mcd2(num1,num2){
    let res
    num1 = Math.abs(num1)
    num2 = Math.abs(num2)

    while(num2){
        res = num2
        num2 = num1 % num2
        num1 = res
    }
    return num1
}

function mcd(numbers){
    let x = numbers[0]
    for (i = 0; i < numbers.length; i++){
        let y = numbers[i]
        x = mcd2(x,y)
    }
    return x
}
let num1 = prompt("Introduce él número 1")
let num2 = prompt("Introduce él número 2")
let num3 = prompt("Introduce él número 3")
console.log(mcd([num1,num2,num3]))

function mcm2(num3,num4){
    return (!num3 || !num4) ? 0 : Math.abs((num3 * num4) / mcd2(num3,num4))
}

function mcm(number2){
    let x = number2[0]
    for (i = 0; i < number2.length; i++){
        let y = number2[i]
        x = mcm2(x,y)
    }
    return x
}

let num4 = prompt("Introduce él número 1")
let num5 = prompt("Introduce él número 2")
let num6 = prompt("Introduce él número 3")
console.log(mcm([num4,num5,num6]))