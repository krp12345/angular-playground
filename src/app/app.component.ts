import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  simpleProp = 'sampleValue';
  isDisabled = true;
  length = 123;
  child_inp = 123;
  
  constructor() {
    console.log("insode constructor");
  }
  ngOnInit(): void {
    console.log('Rushikesh');
  }

  title = 'test-app';
}
