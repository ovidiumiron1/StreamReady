import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  items = ["Item 1","Item 2","Item 3","Item 4","Item 5","Item 6","Item 7",
  "Item 8","Item 9","Item 10","Item 11","Item 12","Item 13","Item 14","Item 15","Item 16","Item 17","Item 18"];

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
