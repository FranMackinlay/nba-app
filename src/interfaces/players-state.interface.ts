import { Player } from './player.interface';

export interface PlayersState {
  players: Player[];
  status: 'idle' | 'loading' | 'failed';
}
