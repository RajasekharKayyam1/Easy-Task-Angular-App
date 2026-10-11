import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Headercomponent } from './header/header.component';
import { User } from './user/user';
import { DUMMY_USERS } from './dummy-users';
import { Tasks } from './tasks/tasks';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Headercomponent, User, Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('first-angular-app');
  users=DUMMY_USERS;
  selecteduserid='u1';
 get selecteduser(){
  return this.users.find((user)=>user.id===this.selecteduserid)!;
 }
  OnselectUser(id:string){
  this.selecteduserid=id;
  }
}
