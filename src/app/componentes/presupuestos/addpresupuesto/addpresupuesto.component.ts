import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PresupuestosService} from '../../../servicios/presupuestos.service';
import {ProveedoresService} from '../../../servicios/proveedores.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-addpresupuesto',
  templateUrl: './addpresupuesto.component.html',
  styleUrls: ['./addpresupuesto.component.css']
})
export class AddpresupuestoComponent implements OnInit {

  presupuestoForm : FormGroup;
  presupuesto : any;
  base : any;
  tipo : any;
  iva : any = 0;
  total : any = 0;

  proveedores : any[] = [];


  constructor(
    private pf:FormBuilder,
    private presupuestoService : PresupuestosService,
    private proveedoresService : ProveedoresService,
    private router : Router
  ) {
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

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor : ['', Validators.required],
      fecha : ['', Validators.required],
      concepto : ['', [Validators.required, Validators.minLength(10)]],
      base : ['', Validators.required],
      tipo : ['', Validators.required],
      iva : this.iva,
      total : this.total

    });

    this.onChanges();
  }

  onSubmit(){
    this.presupuesto = this.savePresupuesto();
    this.presupuestoService.postPresupuesto(this.presupuesto).subscribe(
      newpres=> {
        this.router.navigate(['/presupuestos']);
      }
    );
    this.presupuestoForm.reset();
  }

  savePresupuesto(){
    const savePresupuesto = {
      proveedor :   this.presupuestoForm.get('proveedor').value,
      fecha :   this.presupuestoForm.get('fecha').value,
      concepto :   this.presupuestoForm.get('concepto').value,
      base :   this.presupuestoForm.get('base').value,
      tipo :   this.presupuestoForm.get('tipo').value,
      iva :   this.presupuestoForm.get('iva').value,
      total :   this.presupuestoForm.get('total').value
    }
    return savePresupuesto;
  }

  onChanges() : void{
    this.presupuestoForm.valueChanges.subscribe(
      valor => {
        this.base = valor.base;
        this.tipo = valor.tipo;
        this.presupuestoForm.value.iva = (this.base * this.tipo);
        this.presupuestoForm.value.total = parseInt(this.base) + parseInt(this.presupuestoForm.value.iva);
      }
    );
  }
}
