import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AuthService } from "./services/auth.service";
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

// import firebase module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import {environment} from '../environments/environment';


//import components
import { AppComponent } from './app.component';
import { ExampleComponent } from './shared/example/example.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UserInfoComponent } from './shared/user-info/user-info.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { CartComponent } from './pages/cart/cart.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardShowComponent } from './components/card-show/card-show.component';
import { CardGamesComponent } from './components/card-games/card-games.component';
import { CardBookComponent } from './components/card-book/card-book.component';
import { CardAuthorsComponent } from './components/card-authors/card-authors.component';
import { ShelfComponent } from './pages/shelf/shelf.component';
import { AllBooksComponent } from './pages/all-books/all-books.component';
import { ChatComponent } from './pages/chat/chat.component';
import { HttpErorrsInterceptor } from './interceptors/http-erorrs.interceptor';
import { CrudService } from './services/crud.service';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BooksDetailsComponent } from './components/books-details/books-details.component';
import { AdultsBooksComponent } from './pages/adults-books/adults-books.component';
import { TeenagersBooksComponent } from './pages/teenagers-books/teenagers-books.component';
import { KidsBooksComponent } from './pages/kids-books/kids-books.component';
import { ShelfShowComponent } from './components/shelf-show/shelf-show.component';
import { CrudShelfComponent } from './components/crud-shelf/crud-shelf.component';
import { KidsPageComponent } from './pages/kids-page/kids-page.component';
import { AdultsPageComponent } from './pages/adults-page/adults-page.component';
import { TeenagersPageComponent } from './pages/teenagers-page/teenagers-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CrudCartComponent } from './components/crud-cart/crud-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    LoginComponent,
    RegisterComponent,
    NavBarComponent,
    ContactComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    DashboardComponent,
    UserInfoComponent,
    UserProfileComponent,
    CartComponent,
    CarouselComponent,
    CardShowComponent,
    CardGamesComponent,
    CardBookComponent,
    CardAuthorsComponent,
    ShelfComponent,
    AllBooksComponent,
    ChatComponent,
    BooksListComponent,
    BooksDetailsComponent,
    AdultsBooksComponent,
    TeenagersBooksComponent,
    KidsBooksComponent,
    ShelfShowComponent,
    CrudShelfComponent,
    KidsPageComponent,
    AdultsPageComponent,
    TeenagersPageComponent,
    CrudCartComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    NgbModule
  ],
  providers: [AuthService,
    { provide: HTTP_INTERCEPTORS,
      useClass:HttpErorrsInterceptor,
      multi: true
    }, 
    [CrudService],
    [AngularFirestore]
],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
