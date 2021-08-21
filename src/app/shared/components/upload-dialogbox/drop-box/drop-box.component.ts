import { Component, OnInit } from '@angular/core';
import { NgxDropzoneModule } from 'ngx-dropzone';

@Component({
  selector: 'app-drop-box',
  templateUrl: './drop-box.component.html',
  styleUrls: ['./drop-box.component.scss']
})
export class DropBoxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  files: File[] = [];

	onSelect(event: { addedFiles: any; }) {
		console.log(event);
		this.files.push(...event.addedFiles);
	}

	onRemove(event: File) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}
}
