// lightMode();
const lightMode = () =>{
    var lightMode = document.getElementById("lightMode");
    // var buttonText = document.getElementById("buttonMode");

    if(lightMode.classList.contains("dark")){
        lightMode.classList.remove("dark");
        document.getElementById("buttonMode").innerHTML = "<i class='fa fa-moon'></i> Dark";
    }else{
        lightMode.classList.add("dark");
        document.getElementById("buttonMode").innerHTML = "<i class='fa fa-lightbulb'></i> Light";
    }
}

const functionCountriesList = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(data => data.json())
    .then(response => saveCountriesList(response));
}

const saveCountriesList = (data)=>{
    countriesList = data;
    console.log(countriesList[1].name.common);
    // return data[1];
}

functionCountriesList();