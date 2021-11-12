import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  userList: any
  constructor(private http: HttpClient) {
    console.log('Parent constructor is called')
  }


  ngOnInit(): void {
    console.log('Parent ngOnInit is called')
    this.getUserList()
  }
  getUserList(): void {
    this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data) => {
      this.userList = data;
      console.log(this.userList)
    })
  }
}
