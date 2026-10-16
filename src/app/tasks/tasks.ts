import { Component,Input } from '@angular/core';
import { Task } from './task/task';
import { NewTask } from './new-task/new-task';
import { newTaskData } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [Task,NewTask],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css',
})
export class Tasks {
  @Input() userid !:string;
  @Input() name!:string;
  isaddingTask =false;


  tasks=[{
     id :"t1",
     userid:"u1",
     title: "Angular",
     summary:"Learn Angular basics and advance features ",
     dueDate:"2026-10-21"

},
{
     id :"t2",
     userid:"u2",
     title: "React",
     summary:"Learn react basics and advance features ",
     dueDate:"2026-10-22"

}
]
get selectedusertasks(){
  return this.tasks.filter((task)=>task.userid===this.userid);
}
oncompletetask(id :string){
        this.tasks=this.tasks.filter((task)=>task.id !=id);
}
Onaddtaskclick(){
    this.isaddingTask =true;
}
Oncanceltask(){
  this.isaddingTask=false;
}
OnAddTaskData(taskdata:newTaskData){
  this.tasks.push({
    id:new Date().getTime().toString(),
    userid:this.userid,
    title:taskdata.title,
    summary:taskdata.summary,
    dueDate:taskdata.date,
  })
  this.isaddingTask=false;

}

}
