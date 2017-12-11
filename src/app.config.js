
const CONFIG = {
    unsplash:{
        baseURL:"https://api.unsplash.com",
        client_id: "631231e4b2acb1f7d1c1471d1520f0813748f12ce67dbedaabaa6b9b70d8ab85",
        searchUrl:`https://api.unsplash.com/search/photos/?client_id=631231e4b2acb1f7d1c1471d1520f0813748f12ce67dbedaabaa6b9b70d8ab85&page=1&query=`,
        randomPhoto:`https://api.unsplash.com/photos/random?orientation=landscape&client_id=631231e4b2acb1f7d1c1471d1520f0813748f12ce67dbedaabaa6b9b70d8ab85`
    },
    /*
    openWeatherMap:{
        API_KEY:"8978c9cf5a3823d1bfce427365b87e82",
        
        searchCityUrl:"https://api.openweathermap.org/data/2.5/find?APPID={API_KEY}&type=like&mode=json&q="
    },
    Accuweather:{
        API_KEY:"",
        autocompleteUrl:"http://api.accuweather.com/locations/v1/cities/autocomplete?q=new&apikey={your key}"
    },*/
    WU:{
        baseURL:"http://api.wunderground.com/api/",
        KeyID:"b38021ee1abc7cbb",
        dataUrls:["conditions","hourly","forecast","forecast10day","astronomy"],
        forecastDataUrl:`http://api.wunderground.com/api/b38021ee1abc7cbb/`,
        AutoComplateUrl:"http://autocomplete.wunderground.com/aq?format=json&c=UA&query="

    }
}

export default CONFIG;