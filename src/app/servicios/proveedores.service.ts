import { Injectable } from '@angular/core';

@Injectable()
export class ProveedoresService {

  constructor() { }

  getProveedores(){
    return 'Mensaje desde el servicio';
  }

}
