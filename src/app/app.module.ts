import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {ProveedoresService} from './servicios/proveedores.service';
import {PresupuestosService} from './servicios/presupuestos.service';
import {AutenticacionService} from './servicios/autenticacion.service';
import { ProveedoresComponent } from './componentes/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AddproveedorComponent } from './componentes/proveedores/addproveedor/addproveedor.component';
import { AddpresupuestoComponent } from './componentes/presupuestos/addpresupuesto/addpresupuesto.component';
import { PresupuestosComponent } from './componentes/presupuestos/presupuestos/presupuestos.component';
import { EditpresupuestosComponent } from './componentes/presupuestos/editpresupuestos/editpresupuestos.component';
import { RegistroComponent } from './componentes/autenticacion/registro/registro.component';

const routes : Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'anadir-proveedor', component: AddproveedorComponent },
  { path: 'anadir-presupuesto', component: AddpresupuestoComponent },
  { path: 'presupuestos', component: PresupuestosComponent },
  { path: 'edit-presupuesto/:id', component: EditpresupuestosComponent },
  { path: 'registro', component: RegistroComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveedorComponent,
    AddpresupuestoComponent,
    PresupuestosComponent,
    EditpresupuestosComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutenticacionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
