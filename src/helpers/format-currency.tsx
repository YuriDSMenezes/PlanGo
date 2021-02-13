export function formatCurrency(value: number): string {
  if (!value) {
    return 'R$ 0,00';
  }
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    useGrouping: true
  });
}
