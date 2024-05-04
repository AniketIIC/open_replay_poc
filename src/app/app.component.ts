import { Component } from '@angular/core';
import { ReplaySessionService } from './replay-session.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private openReplayService: ReplaySessionService) { }
}
