import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { ContactsService } from 'src/app/services/contacts.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  contact: any;
  constructor(private router: Router, private route: ActivatedRoute, private _contactsService: ContactsService) { }

  ngOnInit() {
    this.route.params.subscribe(p => {
      this._contactsService.getContactsDetail(p['id'] as number).subscribe(response => {
        this.contact = response;
      });
    });
  }

}
