import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-musicbar',
  templateUrl: './musicbar.component.html',
  styleUrls: ['./musicbar.component.scss']
})
export class MusicbarComponent implements OnInit {

  public changeHeart:any;

  public changeVolume:any;

  public changePlayIcon:any;

  constructor() { }

  ngOnInit(): void {
  }

}
