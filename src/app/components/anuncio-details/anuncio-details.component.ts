import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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

  search = '';
  ok = true;

  currentAnuncio: Anuncio = {
    company: '',
    description: '',
    image: ''
  };

  constructor(private anuncioService:  AnuncioService) { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.currentAnuncio = { ...this.anuncio };
  }

  updateAnuncio(): void {
    const data = {
      company: this.currentAnuncio.company,
      description: this.currentAnuncio.description,
      image: this.currentAnuncio.image
    };
    if (this.currentAnuncio.id) {
      this.anuncioService.update(this.currentAnuncio.id, data)
        .then(() => alert('O anúncio foi editado com sucesso!'))
        .catch(err => console.log(err));
    }
  }
  
  deleteAnuncio(): void {
    if (this.currentAnuncio.id) {
      this.anuncioService.delete(this.currentAnuncio.id)
        .then(() => {
          alert("Anúncio deletado com sucesso!");
          this.refreshList.emit();
        })
        .catch(err => console.log(err));
    }
  }

  compareString(){
    if(this.search === '' ){
      alert('Por favor, digite algo!')
    }else if(this.currentAnuncio.description?.toUpperCase().includes(this.search.toUpperCase()) === true){
      alert('String encontrada! :D')
    }else{
      alert('String não encontrada! :( ')
    }
  }
}