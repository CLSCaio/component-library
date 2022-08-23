const strongPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%&'"])[0-9a-zA-Z$*&@#!%&'"]{8,}$/gm;

const cpf = /^([\d]{3}.){2}[\d]{3}-[\d]{2}$/gm;

const cnpj = /^[\d]{2}.[\d]{3}.[\d]{3}\/[\d]{4}-[\d]{2}$/gm;

const cep = /^[\d]{5}-[\d]{3}$/gm;

const date = /^([\d]{2}\/){2}[\d]{4}$/gm;

const shortDate = /^[\d]{2}\/[\d]{4}$/gm;

const email = /^[a-z0-9.]+@[a-z]+\.((com)((.br)?))$/gm;

const cellphone = /^\([\d]{2}\) 9 [\d]{4}-[\d]{4}$/gm;

const phone = /^\([\d]{2}\) [\d]{4}-[\d]{4}$/gm;

export const regex = {
  strongPassword,
  cpf,
  cnpj,
  cep,
  date,
  shortDate,
  email,
  cellphone,
  phone,
};
