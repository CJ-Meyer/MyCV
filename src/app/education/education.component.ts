import { Component } from '@angular/core';

@Component({
  selector: 'app-education',
  standalone: false,
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  title: string = "Education";
  hs: string = "Awesome High school, 2020"
  college: string = "N/A"
}
