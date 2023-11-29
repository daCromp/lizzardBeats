import { Component, OnInit } from '@angular/core';
import { PlayerService } from '../shared.service';

@Component({
  selector: 'app-play-bar',
  templateUrl: './play-bar.component.html',
  styleUrls: ['./play-bar.component.css']
})
export class PlayBarComponent implements OnInit {

  serviceTest = '';

  constructor(private service: PlayerService){}

  ngOnInit(): void {
   this.service.currentMessage.subscribe(message => {
    // if(this.serviceTest != message){
    //   this.toggle();
    //   this.serviceTest = message;
    // }
   })
  }

  test = true;

  toggle(){
    if(this.test){
      this.test = false;
    }
    else {
      this.test = true;
    }
  }


  triggerError() {
    throw new Error('Sentry IO Test');
  }

  stop() {
    this.test = true;
  }
  start() {
    this.test = false;
  }



  currentTrack: any = {
    trackName: "Let it Happen",
    artist: "Tame Impala",
    imgPath: "https://images.squarespace-cdn.com/content/v1/5ede5114b8b71f40bdb49cf0/1594745914306-HF3MYTCCC9FOW7II3BBV/Tame-Impala-Currents1200px_1200.jpg"
  }
}
