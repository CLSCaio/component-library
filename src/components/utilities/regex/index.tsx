const strongPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%'"-])(?:([\da-zA-Z$*&@#!%'"-])(?!\1)){8,}$/;

const weakPassword =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([\da-zA-Z])(?!\1)){8,}$/;

const cpf = /^([\d]{3}.){2}[\d]{3}-[\d]{2}$/;

const cnpj = /^[\d]{2}.[\d]{3}.[\d]{3}\/[\d]{4}-[\d]{2}$/;

const cep = /^[\d]{5}-[\d]{3}$/;

const date = /^([\d]{2}\/){2}[\d]{4}$/;

const shortDate = /^[\d]{2}\/[\d]{4}$/;

const email = /^[a-z\d.]+@[a-z]+\.((com)((.br)?))$/;

const cellphone = /^\([\d]{2}\) 9 [\d]{4}-[\d]{4}$/;

const phone = /^\([\d]{2}\) [\d]{4}-[\d]{4}$/;

const cpf_cnpj =
  /((([\d]{3}).){2}[\d]{3}-[\d]{2})|[\d]{2}.[\d]{3}.[\d]{3}\/[\d]{4}-[\d]{2}/;

export const regex = {
  strongPassword,
  weakPassword,
  cpf,
  cnpj,
  cpf_cnpj,
  cep,
  date,
  shortDate,
  email,
  cellphone,
  phone,
};
