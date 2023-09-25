import { Component } from '@angular/core';
import { faLinkedin, faGithub,  } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFile, faFileAlt } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent {
  faLinkedIn = faLinkedin;
  faGithub = faGithub;
  faEnvelope = faEnvelope;
  faFile = faFile;
  faFileAlt = faFileAlt;
}
