import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {AutenticacionService} from '../../../servicios/autenticacion.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;
  userdata : any;
  mensaje = false;

  autenticando = false;


  constructor(
    private formBuilder : FormBuilder,
    private autenticacionService : AutenticacionService,
    private router : Router,
    private activatedRoute : ActivatedRoute
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      'email' : ['', [Validators.required, Validators.email]],
      'password' : ['', [Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$'), Validators.minLength(6)]]
    });
  }

  onSubmit(){
    this.autenticando = true;
    this.userdata = this.saveUserData();
    this.autenticacionService.inicioSesion(this.userdata);
    setTimeout(() => {
      if(!this.isAuth()){
        this.mensaje = true;
        this.autenticando = false;
      }
    },2000);
  }

  saveUserData(){
    const saveUserData = {
      email : this.loginForm.get('email').value,
      password : this.loginForm.get('password').value
    }
    return saveUserData;
  }

  isAuth(){
    return this.autenticacionService.isAuthenticated();
  }

}
