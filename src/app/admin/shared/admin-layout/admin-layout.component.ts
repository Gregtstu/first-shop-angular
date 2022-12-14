import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.scss']
})
export class AdminLayoutComponent implements OnInit {

  constructor( public auth: AuthService, private rout: Router) { }
  
  ngOnInit(): void {
  }

  logout(){
    this.auth.logout();
    this.rout.navigate(['/admin', 'login'])
  }

}
