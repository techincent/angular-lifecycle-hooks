import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges, OnDestroy {
  @Input() searchInput: string | undefined;
  constructor() {
    console.log('Child constructor is called')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Child OnChanges', changes)
  }
  ngOnInit(): void {
    console.log('Child ngOnInit is called')
  }
  
  ngOnDestroy(): void {
    console.log('Child ngOnDestroy is called')
  }

}
