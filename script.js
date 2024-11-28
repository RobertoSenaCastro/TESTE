var n1 = prompt('digite')

function funcaoTeste(n1) {
    tabuada = []

    for (let index = 0; index < 11; index++) {
        
        tabuada[index] = n1 * index; 

        alert(`${index} x ${n1} = ${tabuada[index]}`)
}

}