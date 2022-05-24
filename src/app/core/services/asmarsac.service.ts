import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AsMarsac } from '../models/asmarsac';

@Injectable({
  providedIn: 'root'
})
export class AsmarsacService {
  private marsacpath = 'contents';
  constructor(private http: HttpClient) {  }

  getMarsac(){
    return this.http.get<AsMarsac[]>(environment.apiUrl+this.marsacpath)
  }
}

