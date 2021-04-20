import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  images = [
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'},
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'},
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'},
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'},
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'},
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'},
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'},
    {path: 'https://thumbs.dreamstime.com/b/music-logo-189304285.jpg'}
  ] 

  constructor() { }

  ngOnInit(): void {
  }

}
