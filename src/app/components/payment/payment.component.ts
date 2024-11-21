import { Component } from '@angular/core';
import { ShoppingCartComponent } from '../shopping-cart/shopping-cart.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [ShoppingCartComponent,ButtonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent {
  payment(event:any) {
    
    
  }

  ConfirmationOfPayment(){
    alert('Payment successful ' );
  }
}
