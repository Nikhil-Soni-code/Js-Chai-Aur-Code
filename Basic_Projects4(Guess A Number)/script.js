let random = parseInt(Math.random()*100)+1
console.log(random);
const submit = document.getElementById('submit') 
const msg = document.getElementById('message')
const input = document.getElementById('input');
const previous = document.getElementById('previous');
const remaining = document.getElementById('remaining')
const tryagain = document.getElementById('tryagain')
let count = 10;
submit.addEventListener('click',function(f){
    f.preventDefault()
    const value = input.value
    remaining.innerHTML = count
    validate(value)
})
function validate(value){
    if(value<0||value>100||value===''){
        input.value = ''
        alert('Please enter valid number');
        
    }
    else{
        isRight(value)
    }
}
function isRight(value){
    if(random==value){
        msg.innerHTML = `Yeah! you got it right, the number is ${random} 😎👌🔥`
        newGame()

    }
    else if(value<random){
        msg.innerHTML = `Try to think for larger number..`
        input.value = ''
        count=count-1
        previous.innerHTML+=`${value} `
        remaining.innerHTML = `${count}`
    }
    else{
        msg.innerHTML = `Try to think for smaller number..`
        input.value = ''
        count=count-1
        previous.innerHTML+=`${value} `
        remaining.innerHTML = `${count}`
    }
    if(count==0){
        msg.innerHTML = `💔 Game Over! The number was ${random}`
        endGame();
    }
}
function endGame(){
    input.value = ''
    input.setAttribute('disabled','')
    newGame()
}
function newGame(){
    const button = document.createElement('button')
    button.innerHTML = "Try Again"
    tryagain.appendChild(button)
    button.addEventListener('click',function(f){
        f.preventDefault()
        tryagain.removeChild(button)
        count = 10
        input.removeAttribute('disabled')   
        remaining.innerHTML = count
        random = parseInt(Math.random()*100)+1
        msg.innerHTML = `Better luck this time 👍`
        input.value = ''
    
        previous.innerHTML = ''
    })

}

