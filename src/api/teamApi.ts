import { handleResponse } from '../commons/handleResponse';
import { API_URL } from '../constants/env';
import { IImage } from '../interfaces/IImage';

export async function fetchTeam(): Promise<IImage[]> {
  const url = new URL(`/api/team?populate=deep`, API_URL || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}
