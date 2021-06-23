
interface DatosPersonales{
    primerNombre: string,
    primerApellido: string,
    otrosNombres?: string,
    otrosApellidos?: string,
    fechaNacimiento: any
}
interface Direccion{
    estado: string,
    ciudad: string,
    colonia: string, 
    calle: string, 
    numero: string,
    cp: string
}
interface DatosContacto{
    correo: string,
    telefono: string,
    direccion: Direccion
}
interface DatosMedicos{
    tipoSangre: string,
    estatura: string,
    peso: string
}
export interface IPaciente extends  DatosPersonales, Direccion, Omit<DatosContacto, 'direccion'>, DatosMedicos{}

export class Paciente implements IPaciente{
    public _primerNombre: string;
    primerApellido: string;
    otrosNombres?: string;
    otrosApellidos?: string;
    fechaNacimiento: any;
    
    estado: string;
    ciudad: string;
    colonia: string;
    calle: string;
    numero: string;
    cp: string;
    
    correo: string;
    telefono: string;
    
    tipoSangre: string;
    estatura: string;
    peso: string;    
    
    
    public get primerNombre(): string {
        return this._primerNombre;
    }


    public set primerNombre(value: string) {
        this._primerNombre = value;
    }
    
    constructor(){
                    
        this._primerNombre = "";
        this.primerApellido = "";
        this.otrosNombres = "";
        this.otrosApellidos = "";
        this.fechaNacimiento = "";
        
        this.estado = "";
        this.ciudad = "";
        this.colonia = "";
        this.calle = "";
        this.numero = "";
        this.cp = "";
        
        this.correo = "";
        this.telefono = "";
        
        this.tipoSangre = "";
        this.estatura = "";
        this.peso = "";
    }

    
}
