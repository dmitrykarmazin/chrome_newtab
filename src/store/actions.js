
import config from '../app.config'
import ls from '../utils/localStorage.js'

export const GET_SUGGESTION = (context , keyword) => {
    return new Promise((resolve,reject) => {

    fetch(config.WU.AutoComplateUrl+keyword)        
        .then(checkData)
        .then(handleSugeestions)
        .then(data =>{
            context.commit('SUGGEST_LIST_UPDATE', data)
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
            context.commit('FORECAST_UPDATE', data)
            //ls.set('forecast', data, 60*1000) 
            resolve(data);
        })
     
    })
}

export const GET_POSITION = (context) => {
    return new Promise((resolve,reject)=>{
        if('geolocation' in window.navigator){
                window.navigator.geolocation.getCurrentPosition( position => {
                var lat,lng
                [lat,lng]=[position.coords.latitude,position.coords.longitude]
                  fetch(`${config.WU.geolookup}${lat},${lng}.json`)
                        .then(checkData)
                        .then(data=> {
//ls.set('location', data.location.city)
                            context.commit('LOCATION_UPDATE', data.location.city)
                            context.dispatch('GET_DATA', data.location.city)

                        })
                  resolve()
                })
        }else{
            reject('Your browser not support ')
        }
    })
}

export const GET_PHOTO = (context) =>{
    fetch(config.unsplash.randomPhoto)
    .then(res => res.json())
    .then(({urls,location,user,links})=>{
        return {
            urls,
            location,
            user,
            links
        }
    })
    .then(data=>{
        context.commit('PHOTO_UPDATE', data)
        context.commit('PHOTO_DATA_LOAD',true)
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
        //hourly: data[1].hourly_forecast,
        hourly: hourlyFormat(data[1].hourly_forecast),
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

function hourlyFormat(arr){
    var formatAar = [];
    arr=arr.splice(0,24)
    arr.forEach(item=>{
        formatAar.push({
            time_h:`${item.FCTTIME.hour}:${item.FCTTIME.min}`,
            icon:item.icon,
            temp:item.temp.metric
        })
        console.log(1)
    })
    
    return formatAar;
}