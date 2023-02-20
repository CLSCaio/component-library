type convertValues = {
  type: 'money' | 'hour';
  value: number;
};

function convertValueToMoney(value: number) {
  const formatedValue = value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  return formatedValue;
}

function convertValueToHour(minutos: number) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  const formatedValue = `${horas.toString().padStart(2, '0')}:${minutosRestantes
    .toFixed(0)
    .toString()
    .padStart(2, '0')}`;

  const valid24 = formatedValue === '24:00' ? '00:00' : formatedValue;

  return valid24;
}

export const convertValues = ({ type, value }: convertValues) => {
  const types = {
    money: convertValueToMoney(value),
    hour: convertValueToHour(value),
  };

  return types[type];
};
