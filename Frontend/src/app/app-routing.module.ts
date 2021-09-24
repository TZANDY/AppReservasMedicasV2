//importamos librerias
import { NgModule } from "@angular/core";
import { RouterModule,Routes } from "@angular/router";
import { HomeComponent } from './pages/home/home.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';
import { ServicesComponent } from './pages/services/services.component';
import { DepartmentsComponent } from './pages/departments/departments.component';
import { DoctorsComponent } from './pages/doctors/doctors.component';
import { ContactusComponent } from './pages/contactus/contactus.component';

//Crear una constante
const routes: Routes = [

    //crear rutas o path's
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'services',component:ServicesComponent},
    {path:'departments',component:DepartmentsComponent},
    {path:'doctors',component:DoctorsComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'',redirectTo:'home',pathMatch:'full'}
    

];

//lamar al ngmodule

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

//exportar la clase, continua a la carpeta 'app.module.ts'
export class AppRoutingModule{}