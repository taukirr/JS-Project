const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#h').value)
    const weight = parseInt(document.querySelector('#w').value)
    const result = document.querySelector('#results')
    const wguide = document.querySelector('#weight-guide')

    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = "Height is invalid"
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = "Weight is invalid"
    }
    else
    {
       const bmi = (weight/ (height*height/10000).toFixed(2))
       if (bmi <= 18.6) {

            wguide.innerHTML = "Under Weight = Less than 18.6"
        }
        else if (bmi > 18.6 && bmi <= 24.9) {

            wguide.innerHTML = "Normal Range = 18.6 and 24.9"
        }
        else
        {
            wguide.innerHTML = "over Weight = More than 24.9"
        }

       result.innerHTML = `<span>${bmi}</span>`
    }
})