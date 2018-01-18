import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class PresupuestosService {
  presURL = 'https://appcompras-9ee1e.firebaseio.com/presupuestos.json';
  preURL = 'https://appcompras-9ee1e.firebaseio.com/presupuestos';

  constructor(private http : Http) { }

  postPresupuesto(presupuesto : any){
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({'ContentType' : 'application/json' });

    return this.http.post(this.presURL, newpres, {headers:headers}).map(res=>{return res.json()});
  }

  getPresupuestos(){
    return this.http.get(this.presURL).map(res=>res.json());
  }

  getPresupuesto(id$ : string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.get(url).map(res=>res.json());
  }

  putPresupuesto(presupuesto : any, id$ : string){
    const new_pre = JSON.stringify(presupuesto);
    const headers = new Headers({'ContentType' : 'application/json' });
    const url = `${this.preURL}/${id$}.json`;
    return this.http.put(url, new_pre, {headers:headers}).map(res=>{return res.json()});
  }

  deletePresupuesto(id$ : string){
    const url = `${this.preURL}/${id$}.json`;
    return this.http.delete(url).map(res=>res.json());
  }

}
