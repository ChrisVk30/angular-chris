import * as core from '@angular/core';
import { Contact } from 'src/app/models/contact';

@core.Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements core.OnInit, core.OnDestroy {
  onMouseOver() {
    this.spanEvent.emit(this.value)
  }
  
  onClick() {
    this.messageEvent.emit('Hallo vanuit child!');
  }

  value = "Hallo vanuit hover";

  intervalId = 0;
  
  @core.Input()
  message = '';

  @core.Output()
  messageEvent = new core.EventEmitter<string>();

  @core.Output()
  spanEvent = new core.EventEmitter<string>();

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

  ngOnChanges(changes: core.SimpleChanges) : void {
    console.log('%c On Changes','background: green', changes);
  }

}
