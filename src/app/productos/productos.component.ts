import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: object[];

  constructor() { 
    this.productos = [
      {
        id: 1,
        name: 'producto 1',
        price: 10,
        descripcion: 'descripcion del producto 1',
      },
      {
        id: 2,
        name: 'producto 2',
        price: 20,
        descripcion: 'descripcion del producto 3',
      },
      {
        id: 3,
        name: 'producto 3',
        price: 30,
        descripcion: 'descripcion del producto 3',
      },
    ]
  }

  ngOnInit(): void {
  }

}
