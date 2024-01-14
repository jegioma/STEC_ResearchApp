import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Form4500Component } from './components/form-4500/form-4500.component';
import { Form4200Component } from './components/form-4200/form-4200.component';
import { Form2500Component } from './components/form-2500/form-2500.component';
import { AdminComponent } from './components/admin/admin.component';
import { FacultyComponent } from './components/faculty/faculty.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { StudentComponent } from './components/student/student.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { QaPageComponent } from './components/qa-page/qa-page.component';
import { EnrollmentComponent } from './components/enrollment/enrollment.component';
import { ClassRequirementsComponent } from './components/class-requirements/class-requirements.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PreviousProjectsComponent } from './components/previous-projects/previous-projects.component';

const routes: Routes = [

  { path: 'login', title: 'Login | STEC ResearchApp', component: LoginComponent },
  {
    path: 'student', title: 'Student | STEC ResearchApp', component: StudentComponent, children: [
      { path: 'form4500', component: Form4500Component },
      { path: 'form4200', component: Form4200Component },
      { path: 'form2500', component: Form2500Component }
    ]
  },
  { path: 'navigation', component: NavigationComponent },
  { path: 'admin', title: 'Admin | STEC ResearchApp', component: AdminComponent },
  { path: 'faculty', title: 'Faculty | STEC ResearchApp', component: FacultyComponent },
  { path: 'register', title: 'Register | STEC ResearchApp', component: RegisterComponent },
  { path: 'landing', title: 'Home | ResearchApp', component: LandingPageComponent },
  { path: 'enrollment', title: 'Enrollment-Instructions', component: EnrollmentComponent},
  { path: 'class-requirements', title: 'Class-Requirements', component: ClassRequirementsComponent},
  { path: 'faq', title: 'FAQ | STEC ResearchApp', component: QaPageComponent },
  { path: 'previous-projects', title: 'Previous Projects | ResearchApp', component: PreviousProjectsComponent },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: '**', title: '404 Error', component: PageNotFoundComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
