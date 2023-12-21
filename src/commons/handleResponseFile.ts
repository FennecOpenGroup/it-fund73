export async function handleResponseFile(res: Response) {
  const id = await res.json();

  return id['0'].id;
}
