import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Form2500Component } from './components/form-2500/form-2500.component';
import { Form4200Component } from './components/form-4200/form-4200.component';
import { Form4500Component } from './components/form-4500/form-4500.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { RegisterComponent } from './components/register/register.component';
import { StudentComponent } from './components/student/student.component';
import { AuthButtonComponent } from './components/auth-button/auth-button.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { FirebaseService } from './_services/firebase.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from "@angular/fire/compat/firestore";
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PreviewPanelComponent } from './components/preview-panel/preview-panel.component';
import { QaPageComponent } from './components/qa-page/qa-page.component';
import { ClassRequirementsComponent } from './components/class-requirements/class-requirements.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { FeedbackButtonComponent } from './components/feedback-button/feedback-button.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PreviousProjectsComponent } from './components/previous-projects/previous-projects.component';
import { FacultyComponent } from './components/faculty/faculty.component';

@NgModule({
  // CLI will import components
  declarations: [
    AppComponent,
    Form4500Component,
    Form4200Component,
    Form2500Component,
    LoginComponent,
    AdminComponent,
    RegisterComponent,
    StudentComponent,
    AuthButtonComponent,
    NavigationComponent,
    LandingPageComponent,
    HeaderComponent,
    FooterComponent,
    PreviewPanelComponent,
    QaPageComponent,
    ClassRequirementsComponent,
    EnrollmentComponent,
    FeedbackButtonComponent,
    PageNotFoundComponent,
    PreviousProjectsComponent,
    FacultyComponent
  ],
  // Used to interact with DOM
  imports: [
    BrowserModule.withServerTransition({ appId: 'ResearchApp'}),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
    AppRoutingModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  // Any services/global providers
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
