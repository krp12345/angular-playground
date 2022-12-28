import { AfterContentChecked, AfterContentInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterContentInit{
  
  @Input() inp: number = 123;
  constructor() { 
    console.log('Simple Constructors');
  }

  ngAfterContentInit(): void {
    console.log('child content is created');
  }

  ngOnInit(): void {
  }

}
