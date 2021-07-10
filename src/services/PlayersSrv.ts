import API_URL from '../constants/api.constants';
import axios from 'axios';
import { Player } from '../interfaces/player.interface';
import Value from '../interfaces/valie.interface';

export function getPlayers(): Promise<{ data: { data: Player[] } }> {
  return axios.get(`${API_URL}/players`);
}

export function searchPlayer(value: Value) {
  return axios.get(`${API_URL}/players?search=${value.query}`);
}

export function getPlayer(id: string) {
  return axios.get(`${API_URL}/players/${id}`);
}
