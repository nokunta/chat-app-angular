import { Injectable } from '@angular/core';
import  Pusher from 'pusher-js';


// this is here to discourage the instantiating of pusher any where its
// needed, better to reference it from one place
@Injectable()
export class PusherService {
private _pusher: any;

constructor() {
  this._pusher = new Pusher('1db25fbeab327a888e94', {
    cluster: 'eu',
  });
}
// any time it is needed we simply call this method
getPusher(): Pusher {
  return this._pusher;
}

}
