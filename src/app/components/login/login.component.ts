import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup,FormsModule, Validators } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [DialogModule,ButtonModule,FormsModule,InputTextModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  loginForm!: FormGroup;
  showPassword: boolean = false;


  ngOnInit(){
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]), 
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]), 
    });
  }
  get form() { return this.loginForm.controls; }

  visibility(flag:boolean,enter: boolean = false){
    this.visible = flag;
    this.visibleChange.emit(this.visible)
    if(enter)
      this.submitForm();
    this.loginForm.markAsPristine();
    this.loginForm.markAsUntouched();
    this.loginForm.reset();
  }
  
  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
    alert(this.loginForm.value.password)
  }

}
