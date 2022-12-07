import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { AppRoutingModule } from './app-routing.module';
import { ChatService } from './services/chat.service';
import { PusherService } from './services/pusher.service';
import { ChannelsComponent } from './channels/channels.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatscreenComponent,
    LoginPageComponent,
    ChannelsComponent,
    CreateChannelComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [ChatService, PusherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
