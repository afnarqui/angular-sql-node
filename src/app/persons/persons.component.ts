import { PersonsService } from './../persons.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css'],
  providers: [PersonsService]
})
export class PersonsComponent implements OnInit {
  data: any = []
  datos: any = {
    nombre: null,
    edad: null,
    id:null,
  }
  constructor(public service: PersonsService) { }

  ngOnInit() {
    this.get()
  }

  guardar(datos){
    let persons:any = {
      nombre:datos.nombre,
      edad: Number(datos.edad),
    }
    this.service.guardar(persons)
    .subscribe((items)=>{
      this.get();
    })

  }

  actualizar(datos){
    let persons:any = {
      nombre:datos.nombre,
      edad: Number(datos.edad),
      id: Number(datos.id),
    }
    this.service.actualizar(persons)
    .subscribe((items)=>{
    })
    this.get();
  }

  get(){
    let datos = this.service.get()
    datos.subscribe((items) => {

      this.data = items
    }, (error) => {
      console.log(error)
    })
  }

}
