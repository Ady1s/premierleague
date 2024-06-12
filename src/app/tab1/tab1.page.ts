import { Component, ViewChild } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { IonModal } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  @ViewChild(IonModal) modal!: IonModal

  players$: Observable<Player[]>

  private playersOrigin: Player[] = []

  constructor(private playerService: PlayerService) {
    this.players$ = this.playerService.index$()
    .pipe(tap(players=> {
      this.playersOrigin = players
    }))
  }

  transferPlayer(player:Player){
    this.playerService.player = player
  }

  searchPlayer(event: CustomEvent) {
    const value = event.detail.value.toLowerCase()

    const filteredPlayers = this.playersOrigin.filter(player => {
      return player.name.display.toLowerCase().includes(value);
    })

    this.players$ = of(filteredPlayers);
  }
}
