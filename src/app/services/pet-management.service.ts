import { Injectable, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PetManagementService {
  private accountSettingsObservable: Observable<any>;
  private boxOfficeRestApiUrl: string;
  private baseUrl = 'http://localhost:57434/';


  public constructor(
    private http: HttpClient
  ) {}

  public getAllPetsForClaim(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'api/pets');
  }
}
