import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { newTaskData } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.html',
  styleUrl: './new-task.css',
})
export class NewTask {
  @Output() cancel= new EventEmitter<void>();
  @Output() add= new EventEmitter<newTaskData>();
  EnteredTitle='';
  EnteredSummary='';
  EnteredDate='';
   Oncancel(){
  this.cancel.emit();
   }
   OnSubmit(){
    this.add.emit({
      title:this.EnteredTitle,
      summary:this.EnteredSummary,
      date:this.EnteredDate,
    })
   }
}
