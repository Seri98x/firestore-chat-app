import { Component, inject, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButtons, IonButton, IonIcon, IonPopover, IonLabel, IonSegment, SegmentChangeEventDetail, IonSegmentButton, IonList, IonListHeader, IonItem, IonAvatar, IonText, IonFab, IonFabButton, IonModal } from '@ionic/angular/standalone';
import { ellipsisVerticalOutline,add } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { IonModalCustomEvent, IonSegmentCustomEvent, OverlayEventDetail } from '@ionic/core';
import { UserListComponent } from "../../components/user-list/user-list.component";
import { Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonModal, IonFabButton, IonFab, IonText, IonAvatar, IonItem, IonListHeader, IonList, IonSegmentButton, IonSegment, IonLabel, IonPopover, IonIcon, IonButton, IonButtons, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, UserListComponent]
})
export class HomePage implements OnInit {
@ViewChild('new_chat') modal? :IonModal 
@ViewChild('popover') popover? :IonPopover;

private router? : Router;


startChat(item:any) {
 console.log(item);
 this.open_new_chat =false;
}
cancel() {
  this.modal?.dismiss();
   this.open_new_chat = false;
}
open_new_chat: boolean = false;
users = [] as any;

onWillDismiss($event: IonModalCustomEvent<OverlayEventDetail<any>>) {

}
newChat() {
  this.open_new_chat = true;
}

getChat(item:any){

  this.router?.navigate(['/home/chat/',item.id]);

  

}
segment = 'chats';
onSegmentChanged($event: IonSegmentCustomEvent<SegmentChangeEventDetail>) {

}
logout() {
  this.popover?.dismiss();
}

  constructor() 
  {
    this.router = inject(Router);
    this.users = [{
      id:1,name: 'Sample1',picture: 'https://i.pravatar.cc/385'
    
    },{
      id:2,name: 'Sample2',picture: 'https://i.pravatar.cc/386'
    
    },{
      id:3,name: 'Sample3',picture: 'https://i.pravatar.cc/387'
    
    }] as any;
    addIcons({ ellipsisVerticalOutline,add });

   }

  
  ngOnInit() 
  {
    
      
  }

}
