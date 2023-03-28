export const test = {}
// import { isEnteredDateValid, notFutureDate } from './validationsForDate';

// import { resolutionLabels } from '../constants/filter/labels';
// import { InitialValues } from '../constants/interface';

// import { setDataProps } from '../hooks/interface';

// // valida si los campos estan vacios
// export const validateEmptyFields = (searchFilterData: setDataProps) => {
//   return Object.values(searchFilterData).some(
//     (filter) => !!(filter.value || filter.id)
//   );
// };

// export const validateField = (
//   name: string,
//   data: InitialValues
// ): [boolean, string, string] => {
//   let isValid: boolean = false;
//   switch (name) {
//     case resolutionLabels.PROCEEDING:
//       isValid = validateProceeding(data.value);
//       if (!isValid)
//         return [false, 'El número de expediente no es valido', name];
//       else return [true, '', name];

//     case resolutionLabels.RESOLUTION:
//       isValid = validateProceeding(data.value);
//       if (!isValid) return [false, 'El número de acordada no es valido', name];
//       else return [true, '', name];

//     case resolutionLabels.TEXT:
//       isValid = data.value.trim().length > 2;
//       if (!isValid) {
//         return [false, 'El texto no es valido', name];
//       } else return [true, '', name];

//     case resolutionLabels.DATE_FROM:
//       // valida que la fecha desde ingresada sea valida
//       isValid = isEnteredDateValid(data.value);
//       // valida que la fecha no sea mayor a la del dia de hoy - manual
//       isValid = notFutureDate(data.value);
//       if (!isValid) return [false, '"Fecha desde" es invalida', name];
//       else return [true, '', name];

//     case resolutionLabels.DATE_TO:
//       // valida que la fecha hasta ingresada sea valida
//       isValid = isEnteredDateValid(data.value);
//       // valida que la fecha no sea mayor a la del dia de hoy - manual
//       isValid = notFutureDate(data.value);
//       if (!isValid) return [false, '"Fecha hasta" es invalida', name];
//       else return [true, '', name];

//     default:
//       return [true, '', ''];
//   }
// };

// const validateProceeding = (proceeding: string) => {
//   if (!proceeding) return false;

//   const trimmedProceeding = proceeding.trim();
//   if (!trimmedProceeding) return false;

//   const array = trimmedProceeding.split('/');

//   if (array.length === 1) {
//     // sin barra, debe ser solo alfanumerico y guiones

//     // si hay un guion, debe haber al menos 1 caracter alfanumerico antes
//     if (array[0].includes('-')) {
//       const array2 = array[0].split('-');
//       if (!/^[a-zA-Z0-9]+$/.test(array2[0])) return false;
//     }

//     if (!/^[a-zA-Z0-9-]+$/.test(array[0])) return false;
//     return true;
//   }

//   if (array.length !== 2) return false;

//   // si tiene barra, debe tener al menos un caracter alfanumérico hacia ambos lados, puede contener guiones medios
//   if (!/^[a-zA-Z0-9-]+$/.test(array[0])) return false;
//   if (!/^[a-zA-Z0-9-]+$/.test(array[1])) return false;

//   // en la segunda posicion, debe haber al menos 2 caracteres numéricos
//   if (!/^[0-9]{2,}$/.test(array[1])) return false;

//   // Si incluye guiones en cualquier posicion, debe tener al menos 1 caracter alfanumérico antes
//   if (array[0].includes('-')) {
//     const array2 = array[0].split('-');
//     if (!/^[a-zA-Z0-9]+$/.test(array2[0])) return false;
//   }
//   if (array[1].includes('-')) {
//     const array2 = array[1].split('-');
//     if (!/^[a-zA-Z0-9]+$/.test(array2[0])) return false;
//   }

//   return true;
// };
