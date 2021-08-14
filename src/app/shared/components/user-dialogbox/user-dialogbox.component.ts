import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-user-dialogbox',
  templateUrl: './user-dialogbox.component.html',
  styleUrls: ['./user-dialogbox.component.scss']
})
export class UserDialogboxComponent implements OnInit {
  closeResult = '';
  username = 'Ovidiu';
  minutesPlayed = '3250';
  followers = '1770';
  following = '930';
  likedTracks = '321';

  constructor(private modalService: NgbModal, private router: Router) {}

  open(content: any) {
    this.modalService.open(content, { size: 'lg', ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
  
  ngOnInit(): void {
  }
  

}