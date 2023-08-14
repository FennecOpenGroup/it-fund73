import { handleResponse } from '../commons/handleResponse';
import { API_URL_ADMIN } from '../constants/env';
import { IEvents } from '../interfaces/IEvents';

export async function fetchPropose(data: any): Promise<void> {
  const url = new URL('/api/proposes', API_URL_ADMIN || window.location.href);
  return fetch(url.toString(), {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then(handleResponse);
}

export async function fetchEvents(): Promise<IEvents[]> {
  const url = new URL(`/api/events?populate=deep`, API_URL_ADMIN || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}
