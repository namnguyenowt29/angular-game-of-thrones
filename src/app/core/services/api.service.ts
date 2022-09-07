import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from 'src/assets/constants';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  fetchResource(resourceName: string, searchParams?: HttpParams) {
    return this.httpClient.get(API_URL + resourceName, {
      params: searchParams,
    });
  }
}
