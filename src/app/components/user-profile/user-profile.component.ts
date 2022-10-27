import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(private http:HttpClient, private router:Router, private authService:AuthService) {
    if (this.authService.user!=null) {
      this.http.get('http://localhost/pirmasLa/public/api/auth/user-profile').subscribe({
          next: (response) => {
            console.log(response);
          },
          error: (error) => {
            console.log(error);
            router.navigate(['/login']);
          }
        }
      )
    }else{
      router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

}
