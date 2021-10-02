import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private readonly http: HttpClient) { }

  getEmpleados(){
    var datos = {
      idEmpleado: 1,
      idTipoDocumento: null,
      nroDocumento: "",
      idCargo: null,
      nombres: "",
      apellidoPaterno: "",
      apellidoMaterno: "",
      sexo: "",
      estado: ""
    };

    return this.http.get("https://localhost:44306/api/Empleado/Listar");
  }

  getTiposDocumento(){
    return this.http.get("https://localhost:44306/api/Util/ListarTipoDocumento");
  }

}
