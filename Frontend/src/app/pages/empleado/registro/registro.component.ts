import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  empleadoForm = this.fb.group({
    tipo_doc: ['', Validators.required],
    nro_doc: ['', Validators.required],
    nombre: ['', Validators.required],
    apePaterno: ['', Validators.required],
    apeMaterno: ['', Validators.required],
    sexo: ['', Validators.required],
    telefono: ['', Validators.required],
    cargo: ['', Validators.required],
    especialidad: ['', Validators.required],
    email: ['', Validators.required],
    usuario: ['', Validators.required],
    password_1: ['', Validators.required],
    password_2: ['', Validators.required]
  });

  tipoDocumentos = [];

  constructor(private fb: FormBuilder,
    private eService: EmpleadoService,
    private ar: ActivatedRoute) { }

    _onSubmit(){
      if (this.empleadoForm.valid) {
        console.log(this.empleadoForm.value);
      } else {
        alert("Formulario no válido");
      }
    }

    _getTipoDocumento(){
      this.eService.getTiposDocumento().subscribe((rest: any) => {
        this.tipoDocumentos = rest.data
      });
    }

  ngOnInit(): void {

  }

}
