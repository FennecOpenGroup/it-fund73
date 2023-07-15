import { handleResponse } from '../commons/handleResponse';
import { API_URL } from '../constants/env';
import { INews } from '../interfaces/INews';

export async function fetchNews(): Promise<INews[]> {
  const url = new URL(`/api/news?populate=deep`, API_URL || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}
