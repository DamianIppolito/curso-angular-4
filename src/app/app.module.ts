import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {enviroment} from './config/firebase.config';

import { AppComponent } from './app.component';
import {ProveedoresService} from './servicios/proveedores.service';
import {PresupuestosService} from './servicios/presupuestos.service';
import {AutenticacionService} from './servicios/autenticacion.service';
import {GuardService} from './servicios/guard.service';
import {LoadfileService} from './servicios/loadfile.service';
import { ProveedoresComponent } from './componentes/proveedores/proveedores/proveedores.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { HeaderComponent } from './componentes/header/header.component';
import { AddproveedorComponent } from './componentes/proveedores/addproveedor/addproveedor.component';
import { AddpresupuestoComponent } from './componentes/presupuestos/addpresupuesto/addpresupuesto.component';
import { PresupuestosComponent } from './componentes/presupuestos/presupuestos/presupuestos.component';
import { EditpresupuestosComponent } from './componentes/presupuestos/editpresupuestos/editpresupuestos.component';
import { RegistroComponent } from './componentes/autenticacion/registro/registro.component';
import { LoginComponent } from './componentes/autenticacion/login/login.component';

import {FacturasModule} from './facturas/facturas.module';
import {AddfacturaComponent} from './facturas/componentes/facturas/addfactura/addfactura.component';
import {FacturasComponent} from './facturas/componentes/facturas/facturas/facturas.component';
import {EditfacturaComponent} from './facturas/componentes/facturas/editfactura/editfactura.component';
import { UploadComponent } from './componentes/uploads/upload/upload.component';
import { ContratosComponent } from './componentes/uploads/contratos/contratos.component';
import { DetallesComponent } from './componentes/uploads/detalles/detalles.component';

const routes : Routes = [
  { path: '', component: InicioComponent },
  { path: 'proveedores', component: ProveedoresComponent, canActivate:[GuardService] },
  { path: 'anadir-proveedor', component: AddproveedorComponent, canActivate:[GuardService] },
  { path: 'anadir-presupuesto', component: AddpresupuestoComponent, canActivate:[GuardService] },
  { path: 'presupuestos', component: PresupuestosComponent, canActivate:[GuardService] },
  { path: 'edit-presupuesto/:id', component: EditpresupuestosComponent, canActivate:[GuardService] },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'facturas', component: FacturasComponent },
  { path: 'anadir-factura', component: AddfacturaComponent },
  { path: 'edit-factura/:id', component: EditfacturaComponent },
  { path: 'uploads', component: UploadComponent },
  { path: 'contratos', component: ContratosComponent },
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
    RegistroComponent,
    LoginComponent,
    UploadComponent,
    ContratosComponent,
    DetallesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    FacturasModule,
    AngularFireModule.initializeApp(enviroment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [
    ProveedoresService,
    PresupuestosService,
    AutenticacionService,
    GuardService,
    LoadfileService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
