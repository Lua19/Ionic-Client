import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  users :[]| any = [
    {
      "Name":"Mikelol",
      "Username":"Mikelololo",
      "Email": "mike@lol",
      "Password": "Password12"
    },
  ];

  constructor() {}

  ngOnInit(): void {
    console.log(this.users);
  }
  
  searchQuery : string = '';
  searchStudent(){
    console.log(this.searchQuery);
  }

}
