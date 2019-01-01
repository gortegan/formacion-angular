import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userGroup: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.userGroup = new FormGroup({
      name: new FormControl('', [Validators.required]),
      sname: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.userGroup);
  }

}
