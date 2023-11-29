import { Injectable } from '@angular/core';
import { PlayBarComponent } from './play-bar/play-bar.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class PlayerService {

  private messageSource = new BehaviorSubject('Let it Happenth');
  currentMessage = this.messageSource.asObservable();

  trackname: string = '';
  isPlaying: boolean = false;

  togglePlayState(trackName: string, status: string) {

    this.messageSource.next(trackName);

    if (status === 'stopped') {
      this.messageSource.next(trackName);
    }
    else{
    }

    this.isPlaying = !this.isPlaying;
  }
}
