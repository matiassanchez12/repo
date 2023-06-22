import { Component } from '@angular/core';
import { DbService } from '../services/db-service.service';
import { getUserTypeByName } from "../utils";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent {
  public users: any[] = [];
  public isLoading: boolean = false;

  constructor(private dbService: DbService) {
    this.isLoading = true;
    dbService.getAllUsers().subscribe((users)=>{
      this.users = users.map((user : any)=> {
        return {
         ...user,
         type: getUserTypeByName(user.type)
        }
      });
      this.isLoading = false;
    })
  }

  handleChangeStatus(id:string) {

  }
}
