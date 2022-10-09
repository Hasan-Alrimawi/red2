import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/app.component';
import {Observable} from 'rxjs';
import { Store } from '@ngrx/store';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }

}
