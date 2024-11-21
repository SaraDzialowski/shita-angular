import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { BuyingComponent } from "./components/buying/buying.component";
import { AdvertisementComponent } from "./components/advertisement/advertisement.component";
import { ButtonModule } from 'primeng/button';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from "./components/login/login.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BuyingComponent, AdvertisementComponent, RegisterComponent, ButtonModule, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'shita';
  visible: boolean = false;
  visibleLogin: boolean = false;
  #router = inject(Router);

  ngOnInit() {
   
  }

  // showNextPdf() {
  //   setInterval(() => {
  //     this.currentPdfIndex = (this.currentPdfIndex + 1) % this.pdfUrls.length;
  //   }, 2000); // Change page every 5 seconds
  // }
  // triggerAnimation() {
  //   return this.currentPdfIndex;
  // }
  registerFunction(flag:boolean){
    this.visible = flag
  }
  loginFunction(flag:boolean){
    this.visibleLogin = flag
  }
}


