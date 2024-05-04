import { Injectable } from '@angular/core';
import OpenReplay from '@openreplay/tracker'

@Injectable({
  providedIn: 'root'
})
export class ReplaySessionService {
  tracker: OpenReplay | null = null
  constructor() {
    console.log("in the constructor")
    this.tracker = new OpenReplay({
      projectKey: '1S2M1GUhg8pdUTVARGQE',
      // __DISABLE_SECURE_MODE: true
    })
    this.tracker.start().then((res) => {
      console.log("TRACKING HAS BEEN STARTED")
      console.log(res)
      this.tracker.setUserID(`TEST-USER-${Date.now()}`)
    })
  }
}
