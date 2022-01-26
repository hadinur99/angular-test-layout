import { Component, OnInit } from '@angular/core';
import { SideContentService } from 'src/app/services/side-content.service';


export class Users {
  name!: string;
  email!: string;
  address!: string;
  catchPhrase!: string;
}

@Component({
  selector: 'app-side-content-top',
  templateUrl: './side-content-top.component.html',
  styleUrls: ['./side-content-top.component.css']
})

export class SideContentTopComponent implements OnInit {

  users: Array<Users> = [];

  constructor(
    private service: SideContentService
  ) { }

  ngOnInit(): void {
    this.service.getPostSideContentTop().subscribe((data: any) => {
      data.slice(0,5).map((res:any) => {
        const user: Users = new Users();
        user.name = res?.name;
        user.email = res?.email;
        user.address = res?.address;  
        user.catchPhrase = res?.company.catchPhrase

        this.users.push(user)
      })
      console.log(this.users)

    })
  }

}
