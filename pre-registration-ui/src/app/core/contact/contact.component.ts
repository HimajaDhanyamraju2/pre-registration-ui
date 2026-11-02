import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  /**
   * @description Whether the back link goes to My Applications (logged in) or to the login page.
   */
  isLoggedIn() {
    return this.authService.isAuthenticated();
  }

  /**
   * @description Route of My Applications, same as the header link.
   */
  get dashboardLink() {
    return ['/', localStorage.getItem('userPrefLanguage'), 'dashboard'];
  }

}
