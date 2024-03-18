const display = document.getElementById('disp')
const addBtn = document.body
const restBtn = document.getElementById('btn')

let counting = 0

function jsCount(){
    display.innerHTML = counting
} 
addBtn.addEventListener('click', function adding (Accep) {
    if(Accep.target.id !== 'btn'){
        
        counting++
        jsCount()
    }
})

restBtn.addEventListener('click',function reset (){
    counting = 0
    navigator.vibrate([400, 300, 400])
    jsCount()
})