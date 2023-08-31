import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BioModuleComponent } from './components/bio/bio-module/bio-module.component';
import { BioPhotoComponent } from './components/bio/bio-photo/bio-photo.component';
import { BioAboutMeComponent } from './components/bio/bio-about-me/bio-about-me.component';
import { BioSkillsCardComponent } from './components/bio/bio-skills-card/bio-skills-card.component';
import { TextAnimationDirective } from './directives/text-animation.directive';
import { FadeInOnScrollDirective } from './directives/fade-in-on-scroll.directive';
import { BioExperienceCardComponent } from './components/bio/bio-experience-card/bio-experience-card.component';
import { ProjectModuleComponent } from './components/projects/project-module/project-module.component';
import { ProjectCardComponent } from './components/projects/project-card/project-card.component';
import { MediaComponent } from './components/media/media.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BioModuleComponent,
    BioPhotoComponent,
    BioAboutMeComponent,
    BioSkillsCardComponent,
    TextAnimationDirective,
    FadeInOnScrollDirective,
    BioExperienceCardComponent,
    ProjectModuleComponent,
    ProjectCardComponent,
    MediaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }