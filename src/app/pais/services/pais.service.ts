import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { Country } from '../interfaces/pais.interface'

@Injectable({
  providedIn: 'root'
})
export class PaisService {
  private readonly apiUrl: string = 'https://restcountries.eu/rest/v2'

  constructor (private readonly http: HttpClient) { }

  buscarPais (pais: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${pais}`
    return this.http.get<Country[]>(url)
  }

  buscarByCapital (capital: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${capital}`
    return this.http.get<Country[]>(url)
  }

  buscarRegion (region: string): Observable<Country[]> {
    const url = `${this.apiUrl}/region/${region}`
    return this.http.get<Country[]>(url)
  }

  getPaisByAlpha (id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`
    return this.http.get<Country>(url)
  }
}
