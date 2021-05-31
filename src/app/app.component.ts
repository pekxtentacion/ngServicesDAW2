import { Component, OnInit } from '@angular/core';
import { CarritoService } from './carrito.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngServicesDAW2';
  globalCount: number;
  
  constructor(private carritoService: CarritoService){}

  ngOnInit(): void {
    this.globalCount = this.carritoService.count;
    this.carritoService.countObservable.subscribe(response => {
      this.globalCount = response;
    });
  }

}
