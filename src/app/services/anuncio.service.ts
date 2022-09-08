import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Anuncio } from '../models/anuncio.anuncio';

@Injectable({
  providedIn: 'root'
})

export class AnuncioService {
  private dbPath = '/anuncio';
  anunciosRef: AngularFirestoreCollection<Anuncio>;

  constructor(private db: AngularFirestore) {
    this.anunciosRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Anuncio> {
    return this.anunciosRef;
  }

  create(anuncio: Anuncio): any {
    return this.anunciosRef.add({ ...anuncio });
  }

  update(id: string, data: any): Promise<void> {
    return this.anunciosRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.anunciosRef.doc(id).delete();
  }
  get(id: string){
    return this.anunciosRef.doc(id);
  }


}