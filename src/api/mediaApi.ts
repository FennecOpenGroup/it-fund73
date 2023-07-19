import { handleResponseFile } from '../commons/handleResponseFile';
import { API_URL } from '../constants/env';

export async function fetchMedia(data: File): Promise<void> {
  const url = new URL('/api/upload', API_URL || window.location.href);

  const body = new FormData();
  if (data) {
    body.append('files', data);
  }

  return fetch(url.toString(), {
    method: 'POST',
    credentials: 'include',
    body,
  }).then(handleResponseFile);
}
