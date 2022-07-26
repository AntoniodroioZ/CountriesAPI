// lightMode();
var resultsListFinal;
var countriesListContent;

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
    resultsListFinal = countriesList.map(countryCard =>{
        return{
            name: countryCard.name.common,
            flag: countryCard.flags.svg,
            population: countryCard.population,
            capital: countryCard.capital,
            region: countryCard.region
        }
    });
    // console.log(resultsListFinal);
    document.getElementById("innerCountry").innerHTML = resultsListFinal.map(country => innerCountryHTML(country)).join("");
    countriesListContent = document.getElementById("innerCountry");
    // return 
    
}

const innerCountryHTML = (country) =>{
    const {name,flag,population,capital,region} = country;
    // console.log(country);
    return('<div class="col-3 card-space" >'+
                '<div class="card card-desc" onclick="countryDetailsQuery(`'+ country.name +'`)">'+
                    '<img src="'+ country.flag +'" class="card-img-top" alt="...">'+
                    '<div class="card-body">'+
                        '<h5>'+ country.name +'</h5>'+
                        '<p class="data-country">Population: '+country.population+'</p>'+
                        '<p class="data-country">Region: '+country.region+'</p>'+
                        '<p class="data-country">Capital: '+country.capital+'</p>'+
                    '</div>'+
                '</div>'+
          '</div><br>');
}

const countryDetailsQuery = (country) =>{
    fetch('https://restcountries.com/v3.1/name/'+ country)
    .then(data => data.json())
    .then(response => modHTML(response));
    hideHTML();
}

const modHTML = (country) =>{
    console.log(country[0])
    // console.log(Object.keys(country[0].name.nativeName)[0]);
    native= Object.keys(country[0].name.nativeName)[0];
    currence= Object.keys(country[0].currencies)[0];
    // languages = country[0].languages;
    // console.log(country[0]['name']['nativeName'][native]['official'])
    document.getElementById("country-name").innerHTML = country[0].name.common;
    document.getElementById("native-name").innerHTML = "Native Name: " + country[0]['name']['nativeName'][native]['official']; //la propiedad nativename tiene atributos que cambian dependiendo del pais, por eso se usa la linea 67
    document.getElementById("population").innerHTML = "Population: " +country[0].population;
    document.getElementById("region").innerHTML = "Region: " +country[0].region;
    document.getElementById("subregion").innerHTML = "Sub Region: " +country[0].subregion;
    document.getElementById("capital").innerHTML = "Capital: " +country[0].capital[0];
    document.getElementById("domain").innerHTML = "Top Level Domain: " +country[0].tld[0];
    document.getElementById("currencies").innerHTML = "Currencies: " + country[0]['currencies'][currence]['name']+ ', '+ currence;
    document.getElementById("languages").innerHTML = "Languages: " + languages(country[0].languages);
    document.getElementById("flag-detail").src = country[0].flags.svg;
}

const hideHTML = () =>{
    document.getElementById("innerCountry").classList.add("hide-section");
    document.getElementById("nav").classList.add("hide-section");
    document.getElementById("details").classList.remove("hide-section");
}

const showHTML = () =>{
    document.getElementById("innerCountry").classList.remove("hide-section");
    document.getElementById("nav").classList.remove("hide-section");
    document.getElementById("details").classList.add("hide-section");
}

const languages = (tamLang) =>{
    language = '';
    array = Object.keys(tamLang);
    arrayTam = Object.keys(tamLang).length;
    for (let i = 0; i <arrayTam; i++) {
        language = language+array[i]+" ";
    }
    return language;
}

functionCountriesList();