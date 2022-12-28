import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  loading = true;
  data: null | string = null;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.dataService.getData()
    .subscribe(data =>{
      this.loading = false;
      this.data = data;
    })
  }
  
  
}
