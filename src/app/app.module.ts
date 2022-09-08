import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAnuncioComponent } from './components/add-anuncio/add-anuncio.component';
import { AnuncioDetailsComponent } from './components/anuncio-details/anuncio-details.component';
import { AnuncioListComponent } from './components/anuncio-list/anuncio-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddAnuncioComponent,
    AnuncioDetailsComponent,
    AnuncioListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase) // for firestore
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }