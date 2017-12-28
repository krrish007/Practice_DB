import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-services.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user = {
    name: '',
    designation: '',
    location: '',
    company: ''
  }
  constructor(private profileService: ProfileService) { }

  ngOnInit() {
  }

  saveUser(user) {
    this.profileService.saveUser(user).subscribe(
      data => {
        user = {
          name: '',
          designation: '',
          location: '',
          company: ''
        }
      },
      error => {
        console.log(JSON.stringify(error.json()));
      })
  }

}
