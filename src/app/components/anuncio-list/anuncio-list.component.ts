import { Component, OnInit } from '@angular/core';
import { AnuncioService } from 'src/app/services/anuncio.service';
import { map } from 'rxjs/operators';
import { Anuncio } from 'src/app/models/anuncio.anuncio';

@Component({
  selector: 'app-anuncio-list',
  templateUrl: './anuncio-list.component.html',
  styleUrls: ['./anuncio-list.component.css']
})

export class AnuncioListComponent implements OnInit {
  anuncios?: Anuncio[];
  currentAnuncio?: Anuncio;
  currentIndex = -1;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
    this.retrieveAnuncios();
  }

  refreshList(): void {
    this.currentAnuncio = undefined;
    this.currentIndex = -1;
    this.retrieveAnuncios();
  }

  retrieveAnuncios(): void {
    this.anuncioService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.anuncios = data;
    });
  }
  
  setActiveAnuncio(anuncio: Anuncio, index: number): void {
    this.currentAnuncio = anuncio;
    this.currentIndex = index;
  }
}