import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit, OnDestroy {

  intervalId = 0;
  
  @Input()
  message = '';

  @Input()
  contacts : Contact[] = [];

  constructor() { 
    console.log('Hi constructor')
  }
  ngOnDestroy(): void {
    console.log('On destroy');
    // window.clearInterval(this.intervalId);
  }

  ngOnInit(): void {
    console.log('On init');
    // this.intervalId = window.setInterval(() => {
    //   console.log('Hi from interval');
    // }, 1000)
  }

}
