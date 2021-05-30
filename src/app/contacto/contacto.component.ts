import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  name: string;
  mensaje: string;

  constructor(private formService: FormService) { }

  ngOnInit(): void {
    this.name = this.formService.name;
    this.mensaje = this.formService.mensaje;
    
    this.formService.sendNameObservable.subscribe(response => {
      this.name = response;
    });

    this.formService.sendMensajeObservable.subscribe(response => {
      this.mensaje = response;
    });
  }

}
