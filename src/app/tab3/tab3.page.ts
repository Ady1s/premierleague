import { Component, ViewChild } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  @ViewChild(IonModal) modal!: IonModal

  players3$: Observable<Player[]>

  private playersOrigin3: Player[] = []

  constructor(private playerService3: PlayerService) {
    this.players3$ = this.playerService3.index$()
        .pipe(tap(players=> {
          this.playersOrigin3 = players
        }))
  }

  transferPlayer3(player:Player){
    this.playerService3.player = player
  }

  searchPlayer(event: CustomEvent) {
    const value = event.detail.value.toLowerCase()

    const filteredPlayers = this.playersOrigin3.filter(player => {
      return player.name.display.toLowerCase().includes(value);
    })

    this.players3$ = of(filteredPlayers);
    }
}