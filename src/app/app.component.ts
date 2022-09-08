import { Component, Input } from '@angular/core';
import { AnuncioService } from './services/anuncio.service';
import { Anuncio } from './models/anuncio.anuncio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  @Input() anuncio?: Anuncio;

  search = '';
  title = 'Jamsoft Informática';
  logo = 'https://static.wixstatic.com/media/15bace_5d05443f5b1747628d6205634f35ea68~mv2.png/v1/fill/w_124,h_44,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/jamsoft-tecnologia-vermelha.png';

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

  compareStrings(){
    alert(this.currentAnuncio.id)

    /* if(this.currentAnuncio.description?.toUpperCase().includes(this.search.toUpperCase())){
      console.log(this.currentAnuncio.description)
      console.log("Ok");
      alert("A palavra procurada possui na descrição da empresa.");
    }else{
      console.log("Não Okay");
      alert("A string buscada não está inclusa na obs da empresa.");
    } */
    
  }
}
