import { Component, EventEmitter, inject, Input, OnChanges, Output } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { TooltipModule } from 'primeng/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [ButtonModule,ToastModule,RippleModule,TooltipModule],
  providers: [MessageService],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css'
})
export class ShoppingCartComponent implements OnChanges {
 #router = inject(Router);
  products: any[];
  totalSum: number = 0;
  firstChange = true;
  @Input() product:any; 
  @Input() cartId!:number
  @Input() isBuyingComponent: boolean = false;
  @Output() sumOfCart:EventEmitter<number> = new EventEmitter<number>();
  ngOnChanges(){
    if (!this.firstChange) {
      this.products.push(this.product);
      this.calculateTotalSum();
    } else {
      this.firstChange = false;
    }
  }
    constructor(private messageService: MessageService) {
      this.products = [
       
        {
          name: 'Product Name 1',
          image: 'product1.jpg',
          category: 'Category 1',
          price: 10.99,
          inventoryStatus: 'IN STOCK',
          rating: 4.5
        },
        {
          name: 'Product Name 1',
          image: 'product1.jpg',
          category: 'Category 1',
          price: 10.99,
          inventoryStatus: 'IN STOCK',
          rating: 4.5
        },
        {
          name: 'Product Name 1',
          image: 'product1.jpg',
          category: 'Category 1',
          price: 10.99,
          inventoryStatus: 'IN STOCK',
          rating: 4.5
        },
        // {
        //   name: 'Product Name 1',
        //   image: 'product1.jpg',
        //   category: 'Category 1',
        //   price: 10.99,
        //   inventoryStatus: 'IN STOCK',
        //   rating: 4.5
        // },
        // {
        //   name: 'Product Name 1',
        //   image: 'product1.jpg',
        //   category: 'Category 1',
        //   price: 10.99,
        //   inventoryStatus: 'IN STOCK',
        //   rating: 4.5
        // },
        // {
        //   name: 'Product Name 1',
        //   image: 'product1.jpg',
        //   category: 'Category 1',
        //   price: 10.99,
        //   inventoryStatus: 'IN STOCK',
        //   rating: 4.5
        // },
        // {
        //   name: 'Product Name 1',
        //   image: 'product1.jpg',
        //   category: 'Category 1',
        //   price: 10.99,
        //   inventoryStatus: 'IN STOCK',
        //   rating: 4.5
        // },
        // {
        //   name: 'Product Name 1',
        //   image: 'product1.jpg',
        //   category: 'Category 1',
        //   price: 10.99,
        //   inventoryStatus: 'IN STOCK',
        //   rating: 4.5
        // },
        // {
        //   name: 'Product Name 1',
        //   image: 'product1.jpg',
        //   category: 'Category 1',
        //   price: 10.99,
        //   inventoryStatus: 'IN STOCK',
        //   rating: 4.5
        // },
       ];
       this.calculateTotalSum();
    
  }
  ngOnInit() {
    if (this.products.length === 0 && this.isBuyingComponent) {
      setTimeout(() => {
        if (this.products.length === 0) {
          this.emptyCartMassage();
        }
      }, 1000);
    }
    
  }
  
  emptyCartMassage() {
    this.messageService.add({ severity: 'info', summary: 'סרוק מוצרים', detail: 'על מנת להוסיפם לסל הקניות שלך', life: 3500 });
    if (this.products.length === 0) {
      setTimeout(() => {
        if (this.products.length === 0) {
          this.emptyCartMassage();
        }
      }, 15000);
    }
  }

  goToPayment(){ 
    this.#router.navigateByUrl('payment');
  }

  ConfirmationOfPayment(){
    this.sumOfCart.emit(this.totalSum);
  }
  addProducts() {
    this.#router.navigate(['buying'], { queryParams: { id: '1' } }); }
  calculateTotalSum() {
    const sum = this.products.reduce((total, product) => total + product.price, 0);
    this.totalSum = parseFloat(sum.toFixed(2)); // Limiting to 2 decimal places
  }


}

