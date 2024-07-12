import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  login:any=false

  ngOnInit(): void {

    if (localStorage.getItem("user")) {
      this.login=true
    } else {
      this.login=false
    }
  }

  handleclick(){
    localStorage.clear();
    window.location.reload()
    console.clear();
    
  }

}
