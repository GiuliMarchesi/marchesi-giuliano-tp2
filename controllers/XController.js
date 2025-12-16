import XApi from "../Api/XApi.js";
import dateUtils from "../Utils/dateUtils.js";


class XController {
    constructor() {
        this.XApi = new XApi();
    }
    create = async (req, res) => {
        try {
            const { id, temperatura } = req.body;
            if (!id || !temperatura) {
                throw new Error("Datos no válidos")
            }

            const fecha = dateUtils.getFechaActual();
            const hora = dateUtils.getHoraActual();
            const info = {
                id: id,
                temperatura: temperatura,
                fecha: fecha,
                hora: hora
            };

            const data = await this.XApi.create(info)
            res.status(200).send({ message: "x creada", x: data })
        }
        catch (error) {
            res.status(422).send({message:{message:error.message}})
        }
    }

    getAll = async (req, res) => {
        try {
            const data = await this.XApi.getAll()
            res.status(200).send({x:data})
        }
        catch (error) {
            res.status(422).send({message:error.message})
        }
    }
    getById = async (req, res) => {
        try {
            const { id } = req.params;
            const data = await this.XApi.getById(id)
            res.status(200).send({x:id,datos:data})
        }
        catch (error) {
            res.status(422).send({message:error.message})
        }
    }

}
export default XController;