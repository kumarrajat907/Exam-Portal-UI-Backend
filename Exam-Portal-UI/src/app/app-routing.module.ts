import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCategoryComponent } from './component/admin-dashboard/add-category/add-category.component';
import { AddQuestionComponent } from './component/admin-dashboard/add-question/add-question.component';
import { AddQuizzesComponent } from './component/admin-dashboard/add-quizzes/add-quizzes.component';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './component/admin-dashboard/admin-home/admin-home.component';
import { CategoryComponent } from './component/admin-dashboard/category/category.component';
import { UpdateQuizComponent } from './component/admin-dashboard/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './component/admin-dashboard/view-question/view-question.component';
import { ViewQuizzesComponent } from './component/admin-dashboard/view-quizzes/view-quizzes.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SignupComponent } from './component/signup/signup.component';
import { InstructionComponent } from './component/user-dashboard/instruction/instruction.component';
import { LoadQuizComponent } from './component/user-dashboard/load-quiz/load-quiz.component';
import { StartQuizComponent } from './component/user-dashboard/start-quiz/start-quiz.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { UserHomeComponent } from './component/user-dashboard/user-home/user-home.component';
import { AdminGuardGuard } from './services/admin-guard.guard';
import { UserGuard } from './services/user.guard';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: "signup", component: SignupComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'admin', component: AdminDashboardComponent, canActivate: [AdminGuardGuard], children: [
      { path: '', component: AdminHomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'addCategory', component: AddCategoryComponent },
      { path: 'view-quiz', component: ViewQuizzesComponent },
      { path: 'add-quiz', component: AddQuizzesComponent },
      { path: 'update', component: UpdateQuizComponent },
      { path: 'question', component: ViewQuestionComponent },
      { path: 'add-question', component: AddQuestionComponent }
    ]
  },
  {
    path: 'user-dashboard', component: UserDashboardComponent, canActivate: [UserGuard], children: [
      { path: '', component: UserHomeComponent },
      { path: 'profile', component: UserHomeComponent },
      { path: 'loadQuiz', component: LoadQuizComponent },
      { path: 'instruction', component: InstructionComponent },
    ]
  },
  { path: 'start-quiz', component: StartQuizComponent, canActivate: [UserGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
