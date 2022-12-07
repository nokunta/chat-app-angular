import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChannelsComponent } from './channels/channels.component';
import { ChatscreenComponent } from './chatscreen/chatscreen.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CreateChannelComponent } from './create-channel/create-channel.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'channels', component: ChannelsComponent },
  { path: 'chat', component: ChatscreenComponent },
  { path: 'create-channel', component: CreateChannelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
