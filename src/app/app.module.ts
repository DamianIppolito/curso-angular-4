import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {ProveedoresService} from './servicios/proveedores.service';
import { ProveedoresComponent } from './componentes/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AddproveedorComponent } from './componentes/proveedores/addproveedor/addproveedor.component';
import { AddpresupuestoComponent } from './componentes/presupuestos/addpresupuesto/addpresupuesto.component';

const routes : Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent },
  { path: 'anadir-proveedor', component: AddproveedorComponent },
  { path: 'anadir-presupuesto', component: AddpresupuestoComponent },
  { path: '**', component: InicioComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    ProveedoresComponent,
    InicioComponent,
    HeaderComponent,
    AddproveedorComponent,
    AddpresupuestoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProveedoresService],
  bootstrap: [AppComponent]
})
export class AppModule { }
