import { Component } from '@angular/core';
import { faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faFileAlt } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faFile = faFile;
  faFileAlt = faFileAlt;
}
