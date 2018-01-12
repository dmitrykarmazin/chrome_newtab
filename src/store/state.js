 export default {
     data:{
        today:{},
        hourly:[],
        forecast:{},
        forecast10days:{},
        astronomy:{}
     },
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
     //isOpen:false
     
 }