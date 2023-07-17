export async function handleResponse(res: Response) {
  const contentTypeHeader = res.headers.get('content-type');
  const isContentTypeJson = contentTypeHeader?.includes('application/json');
  const isContentTypeText = contentTypeHeader?.includes('text/');
  const isContentTypeBlob = !isContentTypeJson && contentTypeHeader?.includes('application/');
  const contentDisposition = res.headers.get('content-disposition');

  const response =
    (!contentDisposition && isContentTypeJson && (await res.json())) ||
    (isContentTypeText && (await res.text())) ||
    ((contentDisposition || isContentTypeBlob) && (await res.blob()));
  if (!res.ok) {
    const errorData = isContentTypeJson
      ? response
      : {
          status: res.status,
          statusText: res.statusText,
        };
    return Promise.reject(errorData);
  }
  return response.data;
}
