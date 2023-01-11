import { models } from "./models.js"

export class ModeloPieza {

    constructor(numero){
        this.modelo = numero
        this.angulo = 0
        this.matriz = models[this.modelo].matriz[this.angulo]
        this.x = 1
        this.y = 1
        this.longitud = this.matriz[0].length
        this.altura = this.matriz.length

    }
}