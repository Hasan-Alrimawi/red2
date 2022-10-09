import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/app.component';

import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  user:User = new User("","","");
  constructor() { }
  ngOnInit(): void {
  }
  saveData(){
    
  }
}
