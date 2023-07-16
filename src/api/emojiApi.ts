import { handleResponse } from '../commons/handleResponse';
import { API_URL } from '../constants/env';

export async function fetchChangeEmojiPlus(newsId: number, emojiName: string, emojiCount: number): Promise<void> {
  const url = new URL(`/api/news/${newsId}`, API_URL || window.location.href);
  return fetch(url.toString(), {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: {
        [`${emojiName}`]: emojiCount + 1,
      },
    }),
  }).then(handleResponse);
}

export async function fetchChangeEmojiMinus(newsId: number, emojiName: string, emojiCount: number): Promise<void> {
  const url = new URL(`/api/news/${newsId}`, API_URL || window.location.href);
  return fetch(url.toString(), {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: {
        [`${emojiName}`]: emojiCount - 1,
      },
    }),
  }).then(handleResponse);
}
