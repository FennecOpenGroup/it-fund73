import { handleResponse } from '../commons/handleResponse';
import { API_URL_ADMIN } from '../constants/env';
import { IDocs } from '../interfaces/IDocs';

export async function fetchDocs(): Promise<IDocs[]> {
  const url = new URL(`/api/docs?sort=createdAt:DESC&populate=deep`, API_URL_ADMIN || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}
