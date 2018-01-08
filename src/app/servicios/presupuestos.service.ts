import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PresupuestosService {
  presURL = 'https://appcompras-9ee1e.firebaseio.com/presupuestos.json'

  constructor(private http : Http) { }

  postPresupuesto(presupuesto : any){
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({'ContentType' : 'application/json' });

    return this.http.post(this.presURL, newpres, {headers:headers}).map(res=>{return res.json()});
  }

  getPresupuestos(){
    return this.http.get(this.presURL).map(res=>res.json());
  }

}
