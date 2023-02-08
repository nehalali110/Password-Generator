const getBtn = document.querySelector('.getResult')
const input = document.getElementById('passRange')
const finalPass = document.querySelector('.pass__Box')
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = upperCase.toLowerCase()
const numbers = "1234567890"
const symbols = "£$%^&*@"
const a = document.getElementById('upperCase')
const b = document.getElementById('lowerCase')
const c = document.getElementById('numbers')
const d = document.getElementById('Symbols')


function truncateString(str, num) {
    if (str.length > num) {
      return str.slice(0, num);
    } else {
      return str;
    }
  }

const getPassword = (Password = "") =>{
    if(a.checked){
        let Index = Math.floor(Math.random()*upperCase.length) 
        Password += upperCase[Index]
    }
    if(b.checked){
        let Index = Math.floor(Math.random()*lowerCase.length) 
        Password += lowerCase[Index]
    }
    if(c.checked){
        let Index = Math.floor(Math.random()*numbers.length) 
        Password += numbers[Index]
    }
    if(d.checked){
        let Index = Math.floor(Math.random()*symbols.length) 
        Password += symbols[Index]
    }
    let x = parseInt(input.value,10)
    
    if(Password.length<x){
        return getPassword(Password)
    }
    
    finalPass.innerText = truncateString(Password,x)
}


getBtn.addEventListener('click',()=>{
    getPassword()
})

