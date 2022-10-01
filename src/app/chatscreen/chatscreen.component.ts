import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { Subject } from 'rxjs';
import { PusherMessage } from 'src/entities/pusherMessage';
import { User } from 'src/entities/user';
import { environment } from 'src/environments/environment';

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
  onlineUsers : User[] = [];

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.username = 'joao'
    var pusher = new Pusher('1db25fbeab327a888e94', {
      cluster: 'eu',
    });

    var channel = pusher.subscribe('my-channel');
    channel.bind('my-event', (data: PusherMessage) => {
      this.messages.push(data);
    });
  }

  submit() {
    this.httpClient
      .post(`${environment['apiBaseUrl']}/message`, {
        username: this.username,
        message: this.message,
      })
      .subscribe(() => (this.message = ''));
  }
}
