import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonSpinner,IonIcon,IonFabButton,IonTextarea,IonFooter,IonBackButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { send } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonSpinner,IonIcon,IonFabButton,IonTextarea,IonFooter,IonBackButton,IonButtons,IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatPage implements OnInit {
  id: string | null = null;
  message : string = '';
  private route? : ActivatedRoute;
  constructor() 
  { 
    addIcons({send});
    this.route = inject(ActivatedRoute);
  }

  ngOnInit() {
    this.route?.paramMap.subscribe(params => {
      this.id = params.get('id');
  
      // You can now use the `id` parameter as needed
    });
  }

  sendMessage(){

  }

}
