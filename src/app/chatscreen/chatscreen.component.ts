import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { Subject } from 'rxjs';
import { PusherMessage } from 'src/entities/pusherMessage';
import { User } from 'src/entities/user';
import { environment } from 'src/environments/environment';
import { ChatService } from '../services/chat.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-chatscreen',
  templateUrl: './chatscreen.component.html',
  styleUrls: ['./chatscreen.component.scss'],
})
export class ChatscreenComponent implements OnInit {
  message: string = '';
  username: string = '';
  messages: PusherMessage[] = [];
  userName: string = '';
  onlineUsers: User[] = [];

  constructor(
    private httpClient: HttpClient,
    private UserService: UserService,
    private ChatService: ChatService
  ) {}

  ngOnInit(): void {
    this.username = this.UserService.user.firstname;

    this.ChatService.getChannel().bind('my-event', (data: PusherMessage) => {
      if (data.username === this.UserService.user.firstname) {
        data.isSender = true;
      }
      this.messages.push(data);
    });
  }

  submit() {
    this.httpClient
      .post(`${environment.apiBaseUrl}/message`, {
        username: this.username,
        message: this.message,
      })
      .subscribe(() => (this.message = ''));
  }
}
