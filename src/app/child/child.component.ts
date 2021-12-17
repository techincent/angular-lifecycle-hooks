import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked {
  @Input() searchInput!: string;
  @ContentChild('projectedContent') projectedContent!: ElementRef;
  constructor() {
    console.log('Child constructor is called')
  }
  ngOnInit(): void {
    console.log('Child ngOnInit is called')
    console.log('OnInit content', this.projectedContent)
    
  }
  ngAfterContentInit(): void {
    console.log('Child AfterContentInit')
    console.log('AfterContentInit content', this.projectedContent)
  }
  ngAfterContentChecked(): void {
    console.log('Child AfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('Child AfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('Child AfterViewChecked')
  }
}
