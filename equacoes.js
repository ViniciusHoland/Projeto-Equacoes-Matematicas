


function multi(){ 
    var num1 = document.getElementById('multi1').value 
    var num2  = document.getElementById('multi2').value
    var res = document.getElementById('res')
    var soma = Number(num1) * Number(num2)
    res.innerHTML = `A multiplicação entre <strong>${num1} e ${num2} é igual a ${soma}</strong>`    
}
function multi1(){ 
    var num1 = document.getElementById('div1').value 
    var num2  = document.getElementById('div2').value
    var resDiv = document.getElementById('resDiv')
    var soma = Number(num1) / Number(num2)
    resDiv.innerHTML = `A divisão entre <strong>${num1} e ${num2} é igual a ${soma}</strong>`    
}
function multi2(){ 
    var num1 = document.getElementById('soma1').value 
    var num2  = document.getElementById('soma2').value
    var resSoma = document.getElementById('resSoma')
    var soma = Number(num1) + Number(num2)
    resSoma.innerHTML = `A soma entre <strong>${num1} e ${num2} é igual a ${soma}</strong>`    
}
function multi3(){ 
    var num1 = document.getElementById('sub1').value 
    var num2  = document.getElementById('sub2').value
    var resSub = document.getElementById('resSub')
    var soma = Number(num1) - Number(num2)
    resSub.innerHTML = `A sutração entre <strong>${num1} e ${num2} é igual a ${soma}</strong>`    
}