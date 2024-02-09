const pasbx = document.getElementById("password")
const lenbx = document.getElementById("lenbox")
const cpy = document.getElementById("cpy")
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lcase = "abcdefghijklmnopqrstuvwxyz"
const num = "0123456789"
const sym ="@#$%^&*()_+~|}{[]<>/-="
const allchr = ucase + lcase + num + sym

function createpass(){
    const len = lenbx.value
    if(len>=4 && len<=20){
        let pas = ""
    pas +=ucase[Math.floor(Math.random()*ucase.length)]
    pas +=lcase[Math.floor(Math.random()*lcase.length)]
    pas +=num[Math.floor(Math.random()*num.length)]
    pas +=sym[Math.floor(Math.random()*sym.length)]
    while(len>pas.length){
        pas += allchr[Math.floor(Math.random()*allchr.length)]
    }
    pasbx.value = pas
    }
    else{
        pasbx.value = "Invalid length between range 4 to 20" 
    }
}
cpy.addEventListener('click',
function (){
    pasbx.select();
    document.execCommand('copy')
})
