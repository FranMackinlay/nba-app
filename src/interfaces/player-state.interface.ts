import { Player } from './player.interface';

export interface PlayerState {
  player: Player;
  status: 'idle' | 'loading' | 'failed';
}
