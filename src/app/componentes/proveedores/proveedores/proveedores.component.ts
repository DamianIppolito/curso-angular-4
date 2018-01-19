import { Component, OnInit } from '@angular/core';
import {ProveedoresService} from '../../../servicios/proveedores.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.css']
})
export class ProveedoresComponent implements OnInit {

  campoBusqueda : FormControl;
  busqueda : string;

  proveedores :  any[] = [];
  cargando = true;
  resultados = false;
  noresultados = false;
  empty = true;

  constructor(private proveedoresService : ProveedoresService) {
    this.proveedoresService.getProveedores().subscribe(
      proveedores => {
        console.log(proveedores);
        for(const id$ in proveedores){
          const p = proveedores[id$];
          p.id$ = id$;
          this.proveedores.push(proveedores[id$]);
        }
        this.cargando = false;
        this.noresultados = false;
        this.resultados = true;
      }
    );
  }

  ngOnInit() {
    this.campoBusqueda = new FormControl();
    this.campoBusqueda.valueChanges.subscribe(
      term => {
        this.busqueda = term;
        this.cargando = true;
        if(this.busqueda.length != 0){
          this.empty = false;
          this.proveedoresService.getProveedoresSearch(this.busqueda).subscribe(
            proveedores => {
              this.proveedores = [];
              for(const id$ in proveedores){
                const p = proveedores[id$];
                p.id$ = id$;
                this.proveedores.push(proveedores[id$]);
              }
              if(this.proveedores.length < 1 && this.busqueda.length >= 1){
                this.noresultados = true;
                this.resultados = false;
              }else{
                this.noresultados = false;
                this.resultados = true;
              }
              this.cargando = false;
            }
          );
        }else{
          this.proveedores = [];
          this.proveedoresService.getProveedores().subscribe(
            proveedores => {
              console.log(proveedores);
              for(const id$ in proveedores){
                const p = proveedores[id$];
                p.id$ = id$;
                this.proveedores.push(proveedores[id$]);
              }
              this.cargando = false;
            }
          );
          this.empty = true;
          this.cargando = false;
          this.noresultados = false;
          this.resultados = true;
        }
      }
    );
  }

  eliminarProveedor(id$){
    this.proveedoresService.deleteProveedor(id$).subscribe(
      res => {
        this.proveedores = [];
        this.proveedoresService.getProveedores().subscribe(
          proveedores => {
            console.log(proveedores);
            for(const id$ in proveedores){
              const p = proveedores[id$];
              p.id$ = id$;
              this.proveedores.push(proveedores[id$]);
            }
          }
        );
      }
    );
  }
}
