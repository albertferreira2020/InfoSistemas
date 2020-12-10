import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service'
import { carModel } from './cars.model'

@Component({
  selector: 'app-crud',
  templateUrl:'crud.component.html',
  styleUrls:['style.component.css']
})
export class CrudComponent implements OnInit {

  car: carModel = new carModel();
  cars: Array<any> = new Array();
  
  constructor(private crudservice: CrudService) { }

  ngOnInit(): void {
    this.listcars();
  }

  cadastrar(){
    console.log(this.car)
    this.crudservice.cadastrarVeiculo().subscribe(car =>{
    this.car = new carModel();
    this.listcars();
    },err =>{
      console.log('Error' + err)
    })
  }

  listcars(){
    this.crudservice.listcars().subscribe(data =>{
      this.cars = data
    },err =>{
      console.log('Error' + err)
    })
  }

}
