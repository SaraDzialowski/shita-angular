import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { User } from '../../models/user.model';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [DialogModule,ButtonModule,FormsModule,InputTextModule,ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  @Input() visible: boolean = false;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Input() user:User = new User()
  userForm!: FormGroup;
  showPassword: boolean = false;
  @Input() address: string = "אלעזר ברגמן";
  initialAddress: string = this.address;
  building:number = 0;
  apartment:number = 0;
  numbers: number[] = Array.from({length: 20}, (_, i) => i + 1);

  ngOnInit(){
    this.userForm = new FormGroup({
      fullname: new FormControl('', Validators.required),
      username: new FormControl('', Validators.required),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', Validators.required),
      tel: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]{10}$/)])    
    });
  }

  get form() { return this.userForm.controls; }

  visibility(flag:boolean,save: boolean = false){
    this.visible = flag;
    this.visibleChange.emit(this.visible)
    if(save)
      this.submitForm();
    this.userForm.markAsPristine();
    this.userForm.markAsUntouched();
    this.userForm.reset();
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  submitForm() {
        // Assign form values to User instance
        this.user.fullname = this.userForm.value.fullname;
        this.user.username = this.userForm.value.username;
        this.user.password = this.userForm.value.password;
        this.user.email = this.userForm.value.email;
        this.user.address = this.userForm.value.address;
        this.user.tel = this.userForm.value.tel;
        console.log(this.user);
        alert(this.user.fullname)

}
updateAddress(value: any,type:number) {
  type===0?this.building = value.value:this.apartment = value.value
  if(this.apartment == 0)
    this.address = `${this.initialAddress} ${this.building}`;
  else
  this.address = `${this.initialAddress} ${this.building} דירה מספר ${this.apartment}`;

}



}
