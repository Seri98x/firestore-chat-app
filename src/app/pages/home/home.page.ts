import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonPopover, IonLabel, IonSegment, SegmentChangeEventDetail, IonSegmentButton, IonList, IonListHeader, IonItem, IonAvatar, IonText, IonFab, IonFabButton } from '@ionic/angular/standalone';
import { ellipsisVerticalOutline,add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonSegmentCustomEvent } from '@ionic/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonFabButton, IonFab, IonText, IonAvatar, IonItem, IonListHeader, IonList, IonSegmentButton, IonSegment, IonLabel, IonPopover, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {
newChat() {
throw new Error('Method not implemented.');
}
segment = 'chats';
onSegmentChanged($event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {
throw new Error('Method not implemented.');
}
logout() {
throw new Error('Method not implemented.');
}

  constructor() 
  {
    addIcons({ ellipsisVerticalOutline,add });

   }

  ngOnInit() {
  }

}
