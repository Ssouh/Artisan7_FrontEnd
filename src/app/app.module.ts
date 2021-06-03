import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule  ,HttpClientJsonpModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';  
import { MatSelectModule } from '@angular/material/select';  
import { MatDatepickerModule } from '@angular/material/datepicker';  
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {AngularFireModule} from '@angular/fire';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule, MAT_DIALOG_DEFAULT_OPTIONS} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SignupComponent } from './signup/signup.component';
import { TestClientComponent } from './test-client/test-client.component';
import { HomeArtisanComponent } from './home-artisan/home-artisan.component';
import { DevisArtisanComponent } from './devis-artisan/devis-artisan.component';
import { DemandesArtisanComponent } from './demandes-artisan/demandes-artisan.component';
import { ParametresArtisanComponent } from './parametres-artisan/parametres-artisan.component';
import { HomeClientComponent } from './home-client/home-client.component';
import { MesDemandesComponent } from './mes-demandes/mes-demandes.component';
import { ArtisansComponent } from './artisans/artisans.component';
import { FavorisComponent } from './favoris/favoris.component';
import { ParametresClientsComponent } from './parametres-clients/parametres-clients.component';
import { PasswordDialogComponent } from './Dialog/password-dialog/password-dialog.component';
import { NameDialogComponent } from './Dialog/name-dialog/name-dialog.component';
import { DemandeService } from './services/demande.service';
import { ClientService } from './services/client.service';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomePageComponent,
    SignupComponent,
    TestClientComponent,
    HomeArtisanComponent,
    ProfileComponent,
    DevisArtisanComponent,
    DemandesArtisanComponent,
    ParametresArtisanComponent,
    HomeClientComponent,
    MesDemandesComponent,
    ArtisansComponent,
    FavorisComponent,
    ParametresClientsComponent,
    PasswordDialogComponent,
    NameDialogComponent
  ],
  imports: [
    MDBBootstrapModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatIconModule,
    FormsModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDAS-BVqyz4mtu2sKZMqGfacSrjuRzn3eA",
      authDomain: "artisan-efd2d.firebaseapp.com",
      projectId: "artisan-efd2d",
      storageBucket: "artisan-efd2d.appspot.com",
      messagingSenderId: "215919744250",
      appId: "1:215919744250:web:ba7a1ce0c141af7f0be543",
      measurementId: "G-YQMF38RWZC"
    }),
    AngularFireStorageModule,
    MatProgressBarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule

  ],
  entryComponents : [PasswordDialogComponent],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
