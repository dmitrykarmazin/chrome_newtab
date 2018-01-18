
import config from '../../../app.config'



export const GET_PHOTO = (context) =>{
    fetch(config.unsplash.randomPhoto)
    .then(checkData)
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

