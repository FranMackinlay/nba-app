import API_URL from '../../constants/api.constants';
import axios from 'axios';

export function getPlayers() {
  return new axios.get(`${API_URL}/players`);
}

export function searchPlayer(query) {
  return new axios.get(`${API_URL}/players?search=${query}`);
}
