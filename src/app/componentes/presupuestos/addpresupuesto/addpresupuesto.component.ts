import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-addpresupuesto',
  templateUrl: './addpresupuesto.component.html',
  styleUrls: ['./addpresupuesto.component.css']
})
export class AddpresupuestoComponent implements OnInit {

  presupuestoForm : FormGroup;
  presupuesto : any;

  constructor(private pf:FormBuilder) { }

  ngOnInit() {
    this.presupuestoForm = this.pf.group({
      proveedor : ['', Validators.required],
      fecha : ['', Validators.required],
      concepto : ['', [Validators.required, Validators.minLength(10)]],
      base : ['', Validators.required],
      tipo : ['', Validators.required],
      iva : ['', Validators.required],
      total : ['', Validators.required]

    });
  }

  onSubmit(){
    this.presupuesto = this.savePresupuesto();
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
}
