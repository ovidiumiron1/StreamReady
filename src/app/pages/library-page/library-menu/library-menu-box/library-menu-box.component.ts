import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-library-menu-box',
  templateUrl: './library-menu-box.component.html',
  styleUrls: ['./library-menu-box.component.scss']
})
export class LibraryMenuBoxComponent implements OnInit {

  @Input() title: string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
