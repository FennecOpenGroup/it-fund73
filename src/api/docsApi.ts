import { handleResponse } from '../commons/handleResponse';
import { API_URL } from '../constants/env';
import { IDocs } from '../interfaces/IDocs';

export async function fetchDocs(): Promise<IDocs[]> {
  const url = new URL(`/api/docs?populate=deep`, API_URL || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}
