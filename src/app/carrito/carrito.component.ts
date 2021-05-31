import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'descripcion', 'price', 'delete'];
  carrito:Producto[] = [];

  constructor(private carritoService: CarritoService) { }

  ngOnInit(): void {
    this.carrito = this.carritoService.carrito;
    this.carritoService.carritoObservable.subscribe(response => {
      this.carrito = response;
    });
  }

  delete(id:number){
    this.carritoService.removeCarrito(id);
  }
}
