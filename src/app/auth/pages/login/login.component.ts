import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  submitted=false;
  errores=false;

  constructor(private formBuiler: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.form=this.formBuiler.group({
      email: ['', [
        Validators.required,
        Validators.email,
        Validators.minLength(10)
      ]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)
      ]]
    })
  }

  get f(): {[key: string]: AbstractControl}{return this.form.controls;}

  onSubmit():void {
    this.submitted=true;

    if(this.form.invalid)
    {
      return console.log("error")
    }
    else{
      console.log(this.form.value)
    }
  }

}
