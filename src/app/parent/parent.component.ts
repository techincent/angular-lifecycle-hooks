import { HttpClient } from '@angular/common/http';
import { Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnDestroy, DoCheck {
  showChild: boolean = true;
  searchInput: any;
  constructor(private http: HttpClient) {
    console.log('Parent constructor is called')
  }
  ngOnInit(): void {
    console.log('Parent ngOnInit is called')
  }
  ngDoCheck(): void {
    console.log('Parent ngDoCheck')
  }
  toggleChild(): void {
    this.showChild = !this.showChild
  }
  ngOnDestroy(): void {
    console.log('Parent OnDestroy is called')
  }
}
