// const time = document.getElementById('time')
// let date = new Date();
// time.innerHTML = date.toLocaleTimeString()

const time = document.getElementById('time')
// setInterval(function(){},1000)
setInterval(function(){
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString()
},1000)

