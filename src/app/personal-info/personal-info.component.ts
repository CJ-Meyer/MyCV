import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  standalone: false,
  templateUrl: './personal-info.component.html',
  styleUrl: './personal-info.component.css'
})
export class PersonalInfoComponent {
  title = "Personal information"
  name = "Christian Meyer";
  address = "6433 Clough Pike apt. 4";
  phone = "513-593-4783";
  email = "cj20meyer22@gmail.com";
}
