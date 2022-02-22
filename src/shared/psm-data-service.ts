import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PsmDataService {
  
  counter = 0;
  serviceTag: any;
  constructor() { }
}
