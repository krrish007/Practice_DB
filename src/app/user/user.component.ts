import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-services.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users;
  deleteUsers = [];

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.profileService.getUsers().subscribe(
      results => { this.users = results; console.log(this.users) }
    )
  }

  getUsers() {
    alert('user app')
    this.profileService.getUsers().subscribe(
      results => { this.users = results; console.log(this.users) }
    )

  }

  selectUser(e, user, index) {
    if (e.target.value) {
      this.deleteUsers.push(user._id);
    } else {
      this.deleteUsers.splice(index, 1);
    }
  }

  deleteUser() {
    this.profileService.deleteUser(this.deleteUsers).subscribe(data => {
      this.users = data[1];
      alert('all ok');
      this.deleteUsers = [];
    },
      error => {
        console.log(JSON.stringify(error.json()));
      });
  }

}
