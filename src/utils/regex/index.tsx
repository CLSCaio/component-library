export const regex_strongPassword =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#!%'"-])(?:([\da-zA-Z$*&@#!%'"-])(?!\1)){8,}/;

export const regex_weakPassword =
  /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?:([\da-zA-Z$*&@#!%'"-])){8,}/;

export const regex_cpf = /^([\d]{3}.){2}[\d]{3}-[\d]{2}$/;

export const regex_cnpj = /^[\d]{2}.[\d]{3}.[\d]{3}\/[\d]{4}-[\d]{2}$/;

export const regex_cep = /^[\d]{5}-[\d]{3}$/;

export const regex_date = /^([\d]{2}\/){2}[\d]{4}$/;

export const regex_shortDate = /^[\d]{2}\/[\d]{4}$/;

export const regex_email = /^[a-z\d.]+@[a-z]+\.((com)((.br)?))$/;

export const regex_cellphone = /^\([\d]{2}\) 9 [\d]{4}-[\d]{4}$/;

export const regex_phone = /^\([\d]{2}\) [\d]{4}-[\d]{4}$/;

export const regex_cpf_cnpj =
  /((([\d]{3}).){2}[\d]{3}-[\d]{2})|[\d]{2}.[\d]{3}.[\d]{3}\/[\d]{4}-[\d]{2}/;
