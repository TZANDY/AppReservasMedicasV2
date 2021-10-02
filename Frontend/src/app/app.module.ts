import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { ContactusComponent } from './pages/contactus/contactus.component';
import { CitamedicaComponent } from './pages/citamedica/citamedica.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { ListaComponent } from './pages/empleado/lista/lista.component';
import { RegistroComponent } from './pages/empleado/registro/registro.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    ServicesComponent,
    DepartmentsComponent,
    DoctorsComponent,
    ContactusComponent,
    CitamedicaComponent,
    LoginComponent,
    ListaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    
    //agregando la clase que se exporto
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
