import { Component } from '@angular/core';

@Component({
  selector: 'app-bio-experience-card',
  templateUrl: './bio-experience-card.component.html',
  styleUrls: ['./bio-experience-card.component.css']
})
export class BioExperienceCardComponent {
  delay:number = 10;
  showInformation:boolean = false;

  education = [
    `<b>Full Sail University | Aug 2023 - Aug 2024</b>
    <br>
    <br>
    <em>Master of Comuter Science</em>`,

    `<b>Full Sail University | Jun 2018 - Apr 2021</b>
    <br>
    <br>
    <em>Bachelor's of Science in Game Design</em>`
  ]
  experience = [
    `<b>Genesis10 | Jul 2023 - Present</b>
    <br>
    <br>
    <em>Full Stack Developer</em>`,

    `<b>Independant Contractor | Jan 2023 - Aug 2023</b>
    <br>
    <br>
    <em>Full Stack Developer</em>`,

    `<b>Revature | Mar 2022 - January 2023</b>
    <br>
    <br>
    <em>Full Stack Developer</em>`,
  ]

  handleFinishedFadingEvent(value:boolean){
    this.showInformation = value;
  }
}
