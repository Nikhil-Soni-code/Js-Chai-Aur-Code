const form = document.querySelector('form')
form.addEventListener('submit',function(f){
    f.preventDefault();

    const height = parseInt(document.getElementById("height").value);
    const weight = parseInt(document.getElementById("weight").value);
    const result = document.getElementById("result")
    if(height===''||height<=0||isNaN(height)){
        result.innerHTML = "Please enter valid height"
    }
    else if(weight===''||weight<=0||isNaN(weight)){
        result.innerHTML = "Please enter valid weight"
    }
    else{
        const bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = bmi
        if(bmi<18.6){
            outcome.innerHTML = "Under weight"
        }
        else if(bmi<24.9){
            outcome.innerHTML = "Normal weight"
        }
        else{
            outcome.innerHTML = "Over weight"

        }
    }

})


