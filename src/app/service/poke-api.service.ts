import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from "rxjs/operators";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any>{
    return this.http.get<any>(`${this.url}/pokemon?limit=300&offset=0`).pipe(
      tap( res => res ),
      tap( res => {
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemon(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );

        })
      })
    )
  }

  public apiGetPokemon( url: string ):Observable<any>{
    return this.http.get<any>( url ).pipe(
      map(
        res => res
      )
    )
  }
}
