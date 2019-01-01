import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-model',
  templateUrl: './form-model.component.html',
  styleUrls: ['./form-model.component.css']
})
export class FormModelComponent implements OnInit {

  user = {name: '', sname: ''};
  constructor() { }

  ngOnInit() {
  }
  
  onSubmit() {
    console.log(this.user);
  }
}
