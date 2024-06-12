import { Component, ViewChild } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  @ViewChild(IonModal) modal!: IonModal

  players2$: Observable<Player[]>

  private playersOrigin2: Player[] = []

  constructor(private playerService2: PlayerService) {
    this.players2$ = this.playerService2.index$()
        .pipe(tap(players=> {
          this.playersOrigin2 = players
        }))
  }

  transferPlayer2(player:Player){
    this.playerService2.player = player
  }

  searchPlayer(event: CustomEvent) {
    const value = event.detail.value.toLowerCase()

    const filteredPlayers = this.playersOrigin2.filter(player => {
      return player.name.display.toLowerCase().includes(value);
    })

    this.players2$ = of(filteredPlayers);
  }
}
