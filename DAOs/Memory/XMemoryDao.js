class XMemoryDAO {
    constructor(){
        this.XsMemory=[]
    }

    create=async(info)=>{
        try{
            this.XsMemory.push(info)
            console.log(this.XsMemory);
            return  info  
        }
        catch(error){
            throw error;
        }
    }

    getAll=async()=>{
        try{
            return  this.XsMemory
        }
        catch(error){
            throw error;
        }
    }
    getById=async(id)=>{
        try{
            const xs = this.XsMemory.filter(x => x.id == id)
            if(xs.length == 0){
                throw new Error("X no encontrada")
            }
            return xs
        }
        catch(error){
            throw error;
        }
    }

}
export default XMemoryDAO;