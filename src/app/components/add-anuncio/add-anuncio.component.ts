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
  companyOk = false;

  constructor(private anuncioService: AnuncioService) { }

  ngOnInit(): void {
  }

  saveAnuncio(): void {
    this.anuncioService.create(this.anuncio).then(() => {
      this.submitted = true;
    });
    alert("Anúncio cadastrado com sucesso!");
  }

  newAnuncio(): void {
    this.submitted = false;
    this.anuncio = new Anuncio();
  }

  updateButton(status: boolean): void {
    this.companyOk = !this.companyOk;
  }

}
