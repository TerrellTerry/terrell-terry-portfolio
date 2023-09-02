import { Component, Input } from '@angular/core';
import { faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faFileAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input() project: any;
  showing:string = "desc";

  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faFile = faFile;
  faFileAlt = faFileAlt;

  changeShowing(name:string){
    this.showing=name;
  }
}
