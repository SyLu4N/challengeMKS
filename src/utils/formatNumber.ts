export function formatValue(value: number | string | undefined) {
  let valueFormat = value;

  if (!valueFormat) return;

  if (typeof value === 'string')
    valueFormat = value.replace('R$', '').replace(',', '.');

  valueFormat = Number(valueFormat).toLocaleString('pt-br', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return valueFormat;
}
