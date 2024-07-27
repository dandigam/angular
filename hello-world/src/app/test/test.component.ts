import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import EventEmitter from 'events';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [FormsModule,CommonModule],
  template: `
 
   <h2>{{parentData}}</h2>
   <h2>{{data}}</h2>

   <button (click) ="fireEvent()">Send Event</button>
     
  `,
  
  styleUrl: './test.component.css'
})
export class TestComponent {
 
// receving the data from parent pomponent  
@Input() parentData: any;
// another approach is below
@Input('parentData') data: any;


// sending the data to parent component
 
@Output() childEvent = new EventEmitter();

fireEvent() {
  this.childEvent.emit("Hey Parent Component");
}





}
