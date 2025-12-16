import XMemoryDAO from "./Memory/XMemoryDao.js";

class Factory{
    constructor(){
        
    }

    static factory=(modo)=>{
        if(modo =="memory"){
            return {XDao:new XMemoryDAO()}
        }
    }
}

export default Factory;