import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Player } from '../models/player.model';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  player?: Player  

  constructor(private http: HttpClient) { }

  index$(): Observable<Player[]> {
    return this.http.get<any>(`/api/players?pageSize=200&compSeasons=719&altIds=true&page=0&type=player&id=-1&compSeasonId=719`)
    .pipe(map(players => {
      console.log(players)
      return players.content.map((player:Player) => {
        return {
          ...player
        }
        })
      })
    );
  }
}
