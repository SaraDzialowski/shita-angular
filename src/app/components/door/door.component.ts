import { Component, Input } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { Columns } from '../../models/columns.model';
@Component({
  selector: 'app-door',
  standalone: true,
  imports: [ButtonModule,ToastModule,RippleModule],
  providers: [MessageService],
  templateUrl: './door.component.html',
  styleUrl: './door.component.css'
})
export class DoorComponent {
  constructor(private messageService: MessageService) {}
  @Input() door!:Columns
  openDoor(){
    this.showLifeLong();
  }
  showLifeLong() {
    this.messageService.add({ severity: 'info', summary: 'אנא המתן לפתיחת דלת', detail:`דלת מספר: ${this.door.column_name}`, life: 2000 });
}
}
