import { Component, Input, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  @Input() id = 0;
  @Input() name = '';
  @Input() price = 0;
  @Input() descripcion = '';
  idProducto:number = 0;
  count: number;
  globalCount:number = 0;
  carrito: Producto[];

  constructor(private carritoService: CarritoService) { 
  }

  ngOnInit(): void {
    this.count = 0;
    this.carritoService.countObservable.subscribe(response => {
      this.globalCount = response;
    });
    this.carritoService.carritoObservable.subscribe(response => {
      this.carrito = response;
    });
  }

  increment(){
    this.idProducto++;
    this.count++;
    this.globalCount++;
    this.carritoService.sendCount(this.globalCount);
    this.carritoService.sendCarrito({id: this.globalCount, name: this.name, price: this.price, descripcion: this.descripcion});
  }

  decrement(){
    if(this.count !== 0){
      this.count--;
      this.globalCount--;
      this.carritoService.sendCount(this.globalCount);
      this.carritoService.removeCarrito(this.globalCount);
    }
  }
}
