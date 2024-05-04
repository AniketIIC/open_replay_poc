import { Component } from '@angular/core';
import { ReplaySessionService } from './replay-session.service';
import { io } from 'socket.io-client'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private openReplayService: ReplaySessionService) {

    const wsHook = this.openReplayService.tracker.trackWs('my_ws_custom_channel')

    const socket = io("https://backend-test.core.vretail.space/PR-MH800GfdsK4CeHpGYw4goEhpv?type=Sales-Person&unique_id=SP-YGONzSz3n0yYsCVRWgOx&mode=3", {
      transports: ['websocket']
    })

    socket.on('connect', () => {
      console.log("socket Connected")
    })

    socket.on('NOTIFICATION', (data) => {
      console.log("Received Notification event: ", data)
      wsHook('NOTIFICATION', data, 'down')
    })
  }
}
