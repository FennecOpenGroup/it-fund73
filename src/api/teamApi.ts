import { handleResponse } from '../commons/handleResponse';
import { API_URL_ADMIN } from '../constants/env';
import { IImage } from '../interfaces/IImage';

export async function fetchTeam(): Promise<IImage[]> {
  const url = new URL(`/api/team?populate=deep`, API_URL_ADMIN || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}
  