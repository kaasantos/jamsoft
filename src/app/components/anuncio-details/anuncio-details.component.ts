import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Anuncio } from 'src/app/models/anuncio.anuncio';
import { AnuncioService } from 'src/app/services/anuncio.service';

@Component({
  selector: 'app-anuncio-details',
  templateUrl: './anuncio-details.component.html',
  styleUrls: ['./anuncio-details.component.css']
})

export class AnuncioDetailsComponent implements OnInit {
  @Input() anuncio?: Anuncio;
  @Output() refreshList: EventEmitter<any> = new EventEmitter();

  currentAnuncio: Anuncio = {
    company: '',
    description: '',
    image: '',
  };

  message = '';

  constructor(private anuncioService:  AnuncioService) { }

  ngOnInit(): void {
    this.message = '';
  }

  ngOnChanges(): void {
    this.message = '';
    this.currentAnuncio = { ...this.anuncio };
  }

  updatePublished(status: boolean): void {
    if (this.currentAnuncio.id) {
      this. anuncioService.update(this.currentAnuncio.id, { published: status })
      .then(() => {
        this.message = 'The status was updated successfully!';
      })
      .catch(err => console.log(err));
    }
  }

  updateTutorial(): void {
    const data = {
      title: this.currentAnuncio.company,
      description: this.currentAnuncio.description,
      image: this.currentAnuncio.image
    };
    if (this.currentAnuncio.id) {
      this.anuncioService.update(this.currentAnuncio.id, data)
        .then(() => this.message = 'A empresa foi editada com sucesso')
        .catch(err => console.log(err));
    }
  }
  
  deleteTutorial(): void {
    if (this.currentAnuncio.id) {
      this.anuncioService.delete(this.currentAnuncio.id)
        .then(() => {
          this.refreshList.emit();
          this.message = 'The tutorial was updated successfully!';
        })
        .catch(err => console.log(err));
    }
  }
}