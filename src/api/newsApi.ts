import { handleResponse } from '../commons/handleResponse';
import { API_URL } from '../constants/env';
import { INews } from '../interfaces/INews';

export async function fetchNews(): Promise<INews[]> {
  const url = new URL(`/api/news?sort=date:DESC&populate=deep`, API_URL || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}

export async function fetchShorts(): Promise<INews[]> {
  const url = new URL(`/api/shorts?populate=deep`, API_URL || window.location.href);

  return fetch(url.toString(), {
    method: 'GET',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
  }).then(handleResponse);
}

export async function fetchChangeViews(newsId: number, newsViews: number): Promise<void> {
  const url = new URL(`/api/news/${newsId}`, API_URL || window.location.href);
  return fetch(url.toString(), {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: {
        views: newsViews + 1,
      },
    }),
  }).then(handleResponse);
}

export async function fetchChangeShortsViews(newsId: number, newsViews: number): Promise<void> {
  const url = new URL(`/api/shorts/${newsId}`, API_URL || window.location.href);
  return fetch(url.toString(), {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      data: {
        views: newsViews + 1,
      },
    }),
  }).then(handleResponse);
}
