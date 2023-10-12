const btn = document.getElementById('calculate');

btn.addEventListener('click', function(){

    let height = document.querySelector('#height').value;
    let weight = document.querySelector('#weight').value;

    if(height == '' || weight == ''){
        alert('please fill out input fields!');
        return;
    }
        
//BMI = weight in KG/ (height in m * height in m)

height = height / 100

let BMI = (weight / (height * height));

BMI = BMI.toFixed(2);

document.querySelector('#result').innerHTML = BMI;

let status = '';

if(BMI < 18.5){
    status = "kurang/kurus berat badan";

}
if(BMI >+18.5 && BMI < 25){
    status = "Normal";
}

if(BMI >=25 && BMI < 30){
    status = "kelebihan/gemuk berat badan";

}

if(BMI >=30){
    status = "Obesitas"
}

document.querySelector('.comment').innerHTML = `status: ${status}`;

});