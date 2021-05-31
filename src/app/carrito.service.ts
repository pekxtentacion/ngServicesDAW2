import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Producto } from './models/Producto';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  count:number = 0;
  private countSubject = new Subject<number>();
  countObservable = this.countSubject.asObservable();
  carrito:Producto[] = [];
  private carritoSubject = new Subject<Producto[]>();
  carritoObservable = this.carritoSubject.asObservable();

  constructor() { }

  sendCount(count:number) {
    this.count = count;
    this.countSubject.next(count);
  }

  sendCarrito(item:Producto) {
    this.carrito.push(item);
    this.carritoSubject.next(this.carrito);
  }

  removeCarrito(id:number) {
    this.carrito = this.carrito.filter((e,i) => i !== id-1);
    this.carritoSubject.next(this.carrito);
    console.log(id)
  }
}
