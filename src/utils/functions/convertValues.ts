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
  console.log('minuto: ', minutos);
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  const formatedValue = `${horas.toString().padStart(2, '0')}:${minutosRestantes
    .toFixed(0)
    .toString()
    .padStart(2, '0')}`;

  const valid0 = formatedValue === '0' ? '00:00' : formatedValue;
  const valid24 = valid0 === '24:00' ? '00:00' : valid0;

  return valid24;
}

export const convertValues = ({ type, value }: convertValues) => {
  const types = {
    money: convertValueToMoney(value),
    hour: convertValueToHour(value),
  };

  return types[type];
};
