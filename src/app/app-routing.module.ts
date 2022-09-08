import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnuncioListComponent } from './components/anuncio-list/anuncio-list.component';
import { AddAnuncioComponent } from './components/add-anuncio/add-anuncio.component';

const routes: Routes = [
  { path: '', redirectTo: 'anuncios', pathMatch: 'full' },
  { path: 'anuncios', component: AnuncioListComponent },
  { path: 'add', component: AddAnuncioComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }