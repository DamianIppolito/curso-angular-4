import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FacturasService {

  presURL = 'https://appcompras-9ee1e.firebaseio.com/facturas.json'
  preURL = 'https://appcompras-9ee1e.firebaseio.com/facturas'

  constructor(private http : Http) { }

  postFactura(factura : any){
    const newfact = JSON.stringify(factura);
    const headers = new Headers({'ContentType' : 'application/json' });

    return this.http.post(this.presURL, newfact, {headers:headers}).map(res=>{return res.json()});
  }

  getFacturas(){
    return this.http.get(this.presURL).map(res=>res.json());
  }

  getFactura(id$ : string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url).map(res=>res.json());
  }

  putFactura(factura : any, id$ : string){
    const new_pre = JSON.stringify(factura);
    const headers = new Headers({'ContentType' : 'application/json' });
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, new_pre, {headers:headers}).map(res=>{return res.json()});
  }

  deleteFactura(id$ : string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url).map(res=>res.json());
  }

}
