export function shortenNumber(number: any): string {
  if (number === 0) return '0';
  const suffixes = ['', 'K', 'M', 'B', 'T'];
  const suffix = Math.floor(Math.log10(Math.abs(number)) / 3);
  const shortNum = (number / 1000 ** suffix).toFixed(1);
  return `${Math.floor(Number(shortNum))}${suffixes[suffix]}`;
}
