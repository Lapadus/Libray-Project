import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateGuard } from './guards/private.guard';
import { PublicGuard } from './guards/public.guard';
import { AboutComponent } from './pages/about/about.component';
import { AdultsBooksComponent } from './pages/adults-books/adults-books.component';
import { AdultsPageComponent } from './pages/adults-page/adults-page.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import { CartComponent } from './pages/cart/cart.component';
import { ChatComponent } from './pages/chat/chat.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { KidsBooksComponent } from './pages/kids-books/kids-books.component';
import { KidsPageComponent } from './pages/kids-page/kids-page.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ShelfComponent } from './pages/shelf/shelf.component';
import { TeenagersBooksComponent } from './pages/teenagers-books/teenagers-books.component';
import { TeenagersPageComponent } from './pages/teenagers-page/teenagers-page.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { UserInfoComponent } from './shared/user-info/user-info.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    //canActivate:[PublicGuard] 
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate:[PrivateGuard] 
  },
  {
    path: '',
    redirectTo: "/home",
    pathMatch: "full"
  },
  { //secure the profile page for users
    path: 'user-profile',
    component: UserProfileComponent,
    canActivate:[AuthGuardService] 
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'shelf',
    component: ShelfComponent,
  },
  {
    path: 'books',
    component: AllBooksComponent,
  },
  {
    path: 'adultsPage',
    component: AdultsPageComponent,
  },
  {
    path: 'teenagersPage',
    component: TeenagersPageComponent,
  },
  {
    path: 'kidsPage',
    component: KidsPageComponent,
  },
  {
    path: 'chat',
    component: ChatComponent,
  },
  {
    path: 'info',
    component: UserInfoComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
