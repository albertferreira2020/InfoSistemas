import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { carModel } from './cars.model'

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private http: HttpClient) { }

  cadastrarVeiculo(car: carModel):Observable<any>{
    return this.http.post('http://localhost:3001/veiculos/', car)
  }


  listcars():Observable<any>{
    return this.http.get('http://localhost:3001/veiculos')
  }

}
