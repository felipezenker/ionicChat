import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ChatService } from '../../app/chat.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  users;

  constructor(public navCtrl: NavController, public chatService: ChatService) {
    this.users = chatService.users;
  }

}
