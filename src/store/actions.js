
import config from '../app.config'

export const GET_SUGGESTION = (context , keyword) => {
    return new Promise((resolve,reject) => {
    //axios.get(config.WU.AutoComplateUrl+keyword).then((response)=>console.log(response))
    fetch(config.WU.AutoComplateUrl+keyword/*,{mode:'cors'}*/)        
        .then(checkData)
        .then(handleSugeestions)
        .then(data =>{
            context.commit('SUGGEST_LIST_UPDATE', data);
            //context.commit('IS_OPEN_UPDATE',true);
            resolve()
        })
        .catch(error => reject(`Error ${error.code}: $error.message`))
    })
}


export const GET_DATA = (context, location ) => {
    return new Promise((resolve,reject)=>{
         Promise.all(config.WU.dataUrls.map(url=>{
            return new Promise((resolve,reject)=>{
                fetch(`${config.WU.forecastDataUrl}${url}/q/${location}.json`)
                    .then(checkData)
                    .then(data=>resolve(data))
             })
         }))
        .then((promises)=>{
            return promises;
        })
        .then(handleData)
        .then((data)=>{
            context.commit('FORECAST_UPDATE', data);
            //console.log(context.getters.forecast);
            resolve();
        })
     
    })
}

export const GET_POSITION = (context) => {
    return new Promise((resolve,reject)=>{
        if('geolocation' in window.navigator){
                window.navigator.geolocation.getCurrentPosition( position => {
                var lat,lng;
                [lat,lng]=[position.coords.latitude,position.coords.longitude]
                  fetch(`${config.WU.geolookup}${lat},${lng}.json`)
                        .then(checkData)
                        .then(data=> {
                            context.commit('LOCATION_UPDATE',data.location.city)
                            context.dispatch('GET_DATA', data.location.city)
                        })
                  resolve()
                })
        }else{
            reject('Your browser not support ')
        }
    })
}

function checkData(response){
    if(response.ok){
        return response.json();
    }else{
        return Promise.reject({
            code:response.status,
            message:response.statusText
        });
    }
}

function handleData(data){
    return {
        today:data[0].current_observation,
        hourly: data[1].hourly_forecast,
        forecast: data[2].forecast,
        forecast10day : data[3].forecast,
        astronomy: { moon_phase: data[4].moon_phase,
                     sun_phase: data[4].sun_phase
                    }
        };                                  
}

function handleSugeestions(data){
     var sug_arr=[];
     if(data.RESULTS.length){
        data.RESULTS.map(item => {
        const {name, lat,lon} = item;
        sug_arr.push({
            name:name.split(',')[0],
            coords:{lat,lon}
            })
        })
     }else{
        sug_arr.push({
            name:'No result found'
        })
            
     }    
    return sug_arr;
}