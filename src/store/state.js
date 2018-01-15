 import ls from '../utils/localStorage.js'

 export default {
     data: {},
     suggestions:[""],
     currentLocation:'Kiev',
     currentCoords:{
        lat:0,
        lon:0
     },
     isloading:false,
     photo_data_load:false,
     photo_data:{
         urls:{},
         user:{},
         location:{},
         links:{}
     }
     
 }