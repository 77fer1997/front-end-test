/**
 *
 * @param {*} key Llave con la cual será identificada en nuestro local storage
 * @param {*} value el valor o valores que se guardará en el local storage
 * @param {*} time el timestamp actual en segundos
 */
export const localStorageWithExpiration = (key, value, time) => {
  console.log(value);
  localStorage.setItem(
    key,
    JSON.stringify({
      value,
      time,
    })
  );
};
