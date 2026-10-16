import { Component, EventEmitter, Input,Output } from '@angular/core';
import {Tasks} from './task.model';
@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.css',
})
export class Task {

@Input() task ?:Tasks; 
@Output() complete = new EventEmitter<string>();
 OncompleteTask(){
  this.complete.emit(this.task!.id);
 }
}
