import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  name: string;
  mensaje: string;
  private sendNameSubject = new Subject<string>();
  private sendMensajeSubject = new Subject<string>();
  sendNameObservable = this.sendNameSubject.asObservable();
  sendMensajeObservable = this.sendMensajeSubject.asObservable();

  constructor() { }

  sendName(name: string) {
    this.name = name;
    this.sendNameSubject.next(name);
  }
  
  sendMensaje(mensaje: string) {
    this.mensaje = mensaje;
    this.sendMensajeSubject.next(mensaje);
  }
}
