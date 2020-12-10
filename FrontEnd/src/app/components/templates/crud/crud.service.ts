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

  AtualizarVeiculo(id:any, car: carModel):Observable<any>{
    return this.http.put('http://localhost:3001/veiculos/'.concat(id), car)
  }

  ExcluirVeiculo(id:any):Observable<any>{
    return this.http.delete('http://localhost:3001/veiculos/'.concat(id))
  }



  listcars():Observable<any>{
    return this.http.get('http://localhost:3001/veiculos')
  }

}
