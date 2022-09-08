import { Component, OnInit } from '@angular/core';
import { Anuncio } from 'src/app/models/anuncio.anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-add-anuncio',
  templateUrl: './add-anuncio.component.html',
  styleUrls: ['./add-anuncio.component.css']
})

export class AddAnuncioComponent implements OnInit {
  anuncio: Anuncio = new Anuncio();
  submitted = false;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
  }

  saveAnuncio(): void {
    this.anuncioService.create(this.anuncio).then(() => {
      console.log('Created new item successfully!');
      this.submitted = true;
    });
  }

  newAnuncio(): void {
    this.submitted = false;
    this.anuncio = new Anuncio();
  }
}
