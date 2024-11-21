import { NgClass } from '@angular/common';
import { Component ,inject,OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-advertisement',
  standalone: true,
  imports: [NgClass],
  templateUrl: './advertisement.component.html',
  styleUrl: './advertisement.component.css',
  
})
export class AdvertisementComponent implements OnInit {
  #router = inject(Router);
  imageUrls: string[] = [
    '/assets/images/ShitaLogo.jpg',
    '/assets/images/Logo2.jpg',
    '/assets/images/ShitaLogo.jpg',
    '/assets/images/Logo2.jpg',
  ];
  currentImageIndex: number = 0;

  ngOnInit() {
    this.changeImage();
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Enter') {
        this.creditCardTransferEvent();
      }
    });
  
  }

  changeImage() {
    setInterval(() => {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.imageUrls.length;
    }, 1000); // Change image every 3 seconds
  }
  creditCardTransferEvent(){
    this.#router.navigateByUrl('buying');
  }
}
