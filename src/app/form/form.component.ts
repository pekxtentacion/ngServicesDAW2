import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  name: string;
  mensaje: string;

  constructor(private formService: FormService) {
  }

  ngOnInit(): void {
  
  }

  sendData(name: string, mensaje: string) {
    this.formService.sendName(name);
    this.formService.sendMensaje(mensaje);
  }

}
