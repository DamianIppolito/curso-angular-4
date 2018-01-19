import { Injectable } from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class ProveedoresService {

  provURL = 'https://appcompras-9ee1e.firebaseio.com/proveedores.json';
  proURL = 'https://appcompras-9ee1e.firebaseio.com/proveedores';

  constructor(private http : Http) { }

  postProveedor(proveedor : any){
    const newpres = JSON.stringify(proveedor);
    const headers = new Headers({'ContentType' : 'application/json' });

    return this.http.post(this.provURL, newpres, {headers:headers}).map(res=>{return res.json()});
  }

  getProveedores(){
    return this.http.get(this.provURL).map(res=>res.json());
  }

  getProveedor(id$ : string){
    const url = `${this.proURL}/${id$}.json`;
    return this.http.get(url).map(res=>res.json());
  }

  putProveedor(proveedor : any, id$ : string){
    const new_pre = JSON.stringify(proveedor);
    const headers = new Headers({'ContentType' : 'application/json' });
    const url = `${this.proURL}/${id$}.json`;
    return this.http.put(url, new_pre, {headers:headers}).map(res=>{return res.json()});
  }

  deleteProveedor(id$ : string){
    const url = `${this.proURL}/${id$}.json`;
    return this.http.delete(url).map(res=>res.json());
  }

  getProveedoresSearch(search : string){
    const url = `${this.provURL}?orderBy="nombre"&startAt="${search}"&endAt="${search}\uf8ff"`;
    return this.http.get(url).map(res => res.json());
  }

}
