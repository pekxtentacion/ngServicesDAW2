import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

}
