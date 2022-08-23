const strongPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%&'"])[0-9a-zA-Z$*&@#!%&'"]{8,}$/;

const cpf = /([\d]{3}.){2}[\d]{3}-[\d]{2}/;

const cnpj = /[\d]{2}.[\d]{3}.[\d]{3}\/[\d]{4}-[\d]{2}/;

const cep = /[\d]{5}-[\d]{3}/;

const date = /([\d]{2}\/){2}[\d]{4}/;

const shortDate = /[\d]{2}\/[\d]{4}/;

const email = /^[a-z0-9.]+@[a-z]+\.((com)((.br)?))/;

export const regex = {
  strongPassword,
  cpf,
  cnpj,
  cep,
  date,
  shortDate,
  email,
};
