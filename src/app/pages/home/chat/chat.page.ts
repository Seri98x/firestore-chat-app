import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ChatPage implements OnInit {
  id: string | null = null;
  private route? : ActivatedRoute;
  constructor() 
  { 
    this.route = inject(ActivatedRoute);
  }

  ngOnInit() {
    this.route?.paramMap.subscribe(params => {
      this.id = params.get('id');
  
      // You can now use the `id` parameter as needed
    });
  }

}
