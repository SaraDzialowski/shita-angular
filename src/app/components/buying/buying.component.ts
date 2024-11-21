import { Component, Input, OnInit, HostListener, inject, AfterViewInit} from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ShoppingCartComponent } from "../shopping-cart/shopping-cart.component";
import { RegisterComponent } from '../register/register.component';
import { DoorComponent } from '../door/door.component';
import { Columns } from '../../models/columns.model';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-buying',
  standalone: true,
  imports: [ButtonModule, DoorComponent,ShoppingCartComponent,RegisterComponent],
  templateUrl: './buying.component.html',
  styleUrl: './buying.component.css'
})
export class BuyingComponent implements OnInit {
  @Input() user: string = "שרה";
  currentDate: Date = new Date();
  formattedDate: string = "";
  product:any = {}
  inputData: any;
  doorsValues: Columns[] = [
    { id: 1, column_name: '1', location_id: 1, disabled: 0, foreign_id: 100, locked: 0, open_until: new Date(), cart_id: 1 },
    { id: 2, column_name: '2', location_id: 1, disabled: 0, foreign_id: 200, locked: 0, open_until: new Date(), cart_id: 1 },
    { id: 3, column_name: '3', location_id: 1, disabled: 0, foreign_id: 300, locked: 0, open_until: new Date(), cart_id: 1 },
    { id: 4, column_name: '4', location_id: 2, disabled: 0, foreign_id: 400, locked: 0, open_until: new Date(), cart_id: 1 },
    { id: 5, column_name: '5', location_id: 2, disabled: 0, foreign_id: 500, locked: 0, open_until: new Date(), cart_id: 1 },
    { id: 6, column_name: '6', location_id: 2, disabled: 0, foreign_id: 600, locked: 0, open_until: new Date(), cart_id: 1 },
    { id: 7, column_name: '7', location_id: 3, disabled: 0, foreign_id: 700, locked: 0, open_until: new Date(), cart_id: 1 },
    { id: 8, column_name: '8', location_id: 3, disabled: 0, foreign_id: 800, locked: 0, open_until: new Date(), cart_id: 1 }
  ];
  cartId!:number

   constructor(private route: ActivatedRoute) { }

   ngOnInit() {
      this.updateTime();
      setInterval(() => {
        this.updateTime();
      }, 1000); 
      
      const idParam = this.route.snapshot.queryParamMap.get('id')
      if(idParam != null){
        this.cartId = +idParam
      }
    
  }

   scannedBarcode:string = '';
  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    const key = event.key;
  
    if (key === 'Enter' && this.scannedBarcode !== '') {
      this.handleBarcodeInput(this.scannedBarcode);
      this.scannedBarcode = ''; // Reset the scannedBarcode for the next input
    } else {
      this.scannedBarcode += key; // Accumulate characters until Enter key is pressed
    }
  }

  handleBarcodeInput(scannedBarcode: string) {
    this.product =  {
      name: scannedBarcode,
      image: 'product1.jpg',
      category: 'Category 1',
      price: 50,
      inventoryStatus: 'IN STOCK',
      rating: 4.5
    }
  }
  updateTime() {
    this.currentDate = new Date();
    this.formattedDate = this.formatDate(this.currentDate);
  }

  formatDate(date: Date): string {
    if (!date) {
      return 'Invalid Date';
    }
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const formattedHour = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const formattedDate = `${day.toString().padStart(2, '0')}/${month.toString().padStart(2, '0')}/${year}`;
    return`${formattedHour} \n  ${formattedDate}`;
    
  }



}