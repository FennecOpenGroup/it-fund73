import { handleResponse } from '../commons/handleResponse';
import { API_URL } from '../constants/env';


export async function fetchPropose(data: any): Promise<void> {
    const url = new URL('/api/proposes', API_URL || window.location.href);
    return fetch(url.toString(), {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then(handleResponse);
  }
  