import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor(private users: UsersService) {}


  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  LoginEmail : string ='';
  LoginPassword : string = '';

  RegisterName : string='';
  RegisterEmail : string ='';
  RegisterPassword : string = '';


  LoginSubmit() {

    const Login = {
      Email : this.LoginEmail,
      Password : this.LoginPassword
    }

    console.log(Login);

    this.users.login(Login).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }
  RegisterSubmit(){
    
    const Register = {
      Name : this.RegisterName,
      Email : this.RegisterEmail,
      Password : this.RegisterPassword
    }
    console.log(Register)

    this.users.register(Register).subscribe(
      (res) => {
        console.log(res)
      }
    )
  }
}
