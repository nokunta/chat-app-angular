import { Component, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss'],
})
export class ChannelsComponent implements OnInit {
  channels: any[];
  constructor(private ChatService: ChatService, private Router: Router) {}

  ngOnInit(): void {
    this.channels = this.ChatService.getChannels();
  }

  createChannel() {
    this.Router.navigate(['create-channel']);
  }
}
