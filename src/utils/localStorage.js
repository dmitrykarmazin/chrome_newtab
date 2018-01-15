const storage =/* window !== undefined && */localStorage in window ? window.localStorage : null

class LS {
  constructor(storage){
    this.storage = storage
  }
  set(k, v, ex = null){
    var strValue = JSON.stringify({
      v,
      expiration: ex !== null ? Date.now() + ex : 0
    })
    this.storage.setItem(k, strValue)
  }

  get(k){
    var obj = JSON.parse(this.storage.getItem(k))
    if(obj !== null && !this.isExpired(obj.expiration)){
      return obj.v
    }else{
      this.storage.clear(k)
      return null
    }
  }
  
  clear(k){
    this.storage.removeItem(k)
  }

  isExpired(ex){
    return ex && Date.now() > ex ? true : false
  }
}
const ls = new LS(localStorage) 
export default ls