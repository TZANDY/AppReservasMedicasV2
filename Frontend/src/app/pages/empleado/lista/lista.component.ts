import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  headers = ["DNI", "Nombre", "Cargo", "", ""];
  empleados: Array<any> = [];

  constructor(private readonly eService: EmpleadoService,
    private ar: ActivatedRoute) { }

  _getEmpleados(){
    this.eService.getEmpleados().subscribe((rest: any) => {
      console.log(rest.data);
      this.empleados = rest.data;
    });
  }

  ngOnInit(): void {
    this._getEmpleados();
  }

}
