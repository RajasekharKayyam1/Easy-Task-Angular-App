import { Component,EventEmitter,Input, Output  } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
    
  @Input() avatar !:string;
  @Input() name !:string;
  @Input () id !:string;
  @Output() select= new EventEmitter<string>();
  get imagepath(){
    return 'assets/users/'+this.avatar;
  }
   Onselectuser(){
      this.select.emit(this.id);
   }
}
