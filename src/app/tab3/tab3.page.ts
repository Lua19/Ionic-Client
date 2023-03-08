import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit{

  constructor() {}


  ngOnInit(): void {
    throw new Error('Method not implemented.');
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
  }
  RegisterSubmit(){
    
    const Register = {
      Name : this.RegisterName,
      Email : this.RegisterEmail,
      Password : this.RegisterPassword
    }
    console.log(Register)
  }
}
