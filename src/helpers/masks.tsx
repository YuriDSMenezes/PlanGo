export function currency(e: string): string {
  let value = e;
  value = e.replace(/\D/g, '');
  value = e.replace(/(\d)(\d{2})$/, '$1,$2');
  value = e.replace(/(?=(\d{3}) + (\D))\B/g, '');
  const a = value;
  return a;
}
