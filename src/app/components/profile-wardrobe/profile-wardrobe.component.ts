import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-profile-wardrobe',
  templateUrl: './profile-wardrobe.component.html',
  styleUrls: ['./profile-wardrobe.component.scss']
})
export class ProfileWardrobeComponent implements OnInit {

  @Input() user!: User;

  ngOnInit(): void {}

}
