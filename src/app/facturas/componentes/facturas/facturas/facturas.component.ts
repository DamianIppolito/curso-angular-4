import { Component, OnInit } from '@angular/core';
import {FacturasService} from '../../../servicios/facturas.service';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {

  facturas : any[] = [];

  constructor(private facturasService : FacturasService) {
    this.facturasService.getFacturas().subscribe(
      facturas => {
        console.log(facturas);
        for(const id$ in facturas){
          const p = facturas[id$];
          p.id$ = id$;
          this.facturas.push(facturas[id$]);
        }
      }
    );
  }

  ngOnInit() {
  }

  eliminarFactura(id$){
    this.facturasService.deleteFactura(id$).subscribe(
      res => {
        this.facturas = [];
        this.facturasService.getFacturas().subscribe(
          facturas => {
            console.log(facturas);
            for(const id$ in facturas){
              const p = facturas[id$];
              p.id$ = id$;
              this.facturas.push(facturas[id$]);
            }
          }
        );
      }
    );
  }

}
