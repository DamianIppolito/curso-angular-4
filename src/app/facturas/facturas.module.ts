import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddfacturaComponent } from './componentes/facturas/addfactura/addfactura.component';
import { EditfacturaComponent } from './componentes/facturas/editfactura/editfactura.component';
import { FacturasComponent } from './componentes/facturas/facturas/facturas.component';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {FacturasService} from './servicios/facturas.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
    AddfacturaComponent,
    EditfacturaComponent,
    FacturasComponent
  ],
  providers : [FacturasService]
})
export class FacturasModule { }
