import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { SignupComponent } from './component/signup/signup.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCarouselModule } from 'ng-mat-carousel';
import { authInterceptorProvider } from './services/auth.interceptor';
import { AdminDashboardComponent } from './component/admin-dashboard/admin-dashboard.component';
import { UserDashboardComponent } from './component/user-dashboard/user-dashboard.component';
import { ProfileComponent } from './component/profile/profile.component';
import { MatListModule } from '@angular/material/list';
import { SidebarComponent } from './component/admin-dashboard/sidebar/sidebar.component';
import { SidebarComponent as UserSideBar } from './component/user-dashboard/sidebar/sidebar.component';
import { AdminHomeComponent } from './component/admin-dashboard/admin-home/admin-home.component';
import { CategoryComponent } from './component/admin-dashboard/category/category.component';
import { AddCategoryComponent } from './component/admin-dashboard/add-category/add-category.component';
import { ViewQuizzesComponent } from './component/admin-dashboard/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from './component/admin-dashboard/add-quizzes/add-quizzes.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { UpdateQuizComponent } from './component/admin-dashboard/update-quiz/update-quiz.component';
import { ViewQuestionComponent } from './component/admin-dashboard/view-question/view-question.component';
import { AddQuestionComponent } from './component/admin-dashboard/add-question/add-question.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { LoadQuizComponent } from './component/user-dashboard/load-quiz/load-quiz.component';
import { UserHomeComponent } from './component/user-dashboard/user-home/user-home.component';
import { NgxUiLoaderModule, NgxUiLoaderHttpModule,NgxUiLoaderRouterModule } from "ngx-ui-loader";
import { InstructionComponent } from './component/user-dashboard/instruction/instruction.component';
import { StartQuizComponent } from './component/user-dashboard/start-quiz/start-quiz.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserDashboardComponent,
    ProfileComponent,
    SidebarComponent,
    AdminHomeComponent,
    CategoryComponent,
    AddCategoryComponent,
    ViewQuizzesComponent,
    AddQuizzesComponent,
    UpdateQuizComponent,
    ViewQuestionComponent,
    AddQuestionComponent,
    UserSideBar,
    LoadQuizComponent,
    UserHomeComponent,
    InstructionComponent,
    StartQuizComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatCarouselModule.forRoot(),
    MatListModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatExpansionModule,
    NgxUiLoaderModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,

    }),
    NgxUiLoaderRouterModule,
    MatRadioModule,
    MatProgressSpinnerModule,
  ],
  providers: [authInterceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
