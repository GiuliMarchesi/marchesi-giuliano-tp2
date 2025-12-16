import Factory from "../DAOs/Factory.js";
import {MODO} from "../Config/config.js";


class XApi{
    constructor(){
        this.factory=Factory.factory(MODO)
    }
    static MIN_SONDA =1;
    static MAX_SONDA =5; 
    static MIN_TEMP =-20; 
    static MAX_TEMP =100; 



    //validar la info
    create=async(info)=>{
        try{
            if(info.id<XApi.MIN_SONDA || info.id>XApi.MAX_SONDA || 
                info.temperatura<XApi.MIN_TEMP || info.temperatura>XApi.MAX_TEMP){
                throw new Error("datos no válidos")
            }
            const data = await this.factory.XDao.create(info)
            return await data;    
        }
        catch(error){
            throw error;
        }
    }

    getAll=async()=>{
        try{
            const data = await this.factory.XDao.getAll()
            return await data;    
        }
        catch(error){
            throw error;
        }
    }

    getById=async(id)=>{
        try{
            if(id<XApi.MIN_SONDA || id>XApi.MAX_SONDA){
                throw new Error("Número de XXXX incorrecto")
            }

            const data = await this.factory.XDao.getById(id)
            return await data;    
        }
        catch(error){
            throw error;
        }
    }
}

export default XApi;