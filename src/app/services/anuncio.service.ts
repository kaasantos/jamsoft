import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Anuncio } from '../models/anuncio.anuncio';

@Injectable({
  providedIn: 'root'
})

export class AnuncioService {
  private dbPath = '/anuncio';
  tutorialsRef: AngularFirestoreCollection<Anuncio>;

  constructor(private db: AngularFirestore) {
    this.tutorialsRef = db.collection(this.dbPath);
  }

  getAll(): AngularFirestoreCollection<Anuncio> {
    return this.tutorialsRef;
  }

  create(anuncio: Anuncio): any {
    return this.tutorialsRef.add({ ...anuncio });
  }

  update(id: string, data: any): Promise<void> {
    return this.tutorialsRef.doc(id).update(data);
  }

  delete(id: string): Promise<void> {
    return this.tutorialsRef.doc(id).delete();
  }
}