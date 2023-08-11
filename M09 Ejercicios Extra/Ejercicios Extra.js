/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arreglo = []
   for (const clave in objeto) {
      if (objeto.hasOwnProperty.call(objeto, clave)) {
         const valor = objeto[clave];
         arreglo.push([clave,valor])
      }
   }
   return arreglo
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let ordenado = string.split('').sort().reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {})
   return ordenado
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
         function esMayuscula(letra)
      {
         return letra === letra.toUpperCase();
      }

 
   // let newString = string.split('').sort((a, b) => {
   //    if (esMayuscula(a)) {
   //      return 1;
   //    }
   //    else return 2
      
   //  });
      let mayusculas = []
      let minusculas = []
      string.split('').map(letra => {
         if (esMayuscula(letra)){
            mayusculas.push(letra)
         } else minusculas.push(letra)
      })
      let newString = mayusculas.join('')+minusculas.join('')
    return newString
}
// console.log(capToFront('akakDAVIDkoka'))

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   let palabrasAlRevez = frase.split(' ').map(palabra => {
      let palabraAlrevez = palabra.split('').reverse().join('')
      return palabraAlrevez
   }).join(' ')
   return palabrasAlRevez
}
// console.log(asAmirror("hoy es jueves"))
function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   numero = numero.toString().split('')
   let capicua = true
   numero.forEach((num,i) => {
      if(num != numero[numero.length -1-i]){
         // console.log(num, i , numero.length, numero[numero.length -1-i])
         // break 
         capicua = false
      }
   })
   if(capicua)
   return "Es capicua"
   else return "No es capicua"
}

// console.log(capicua(8908))

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   let newString = string.split('').filter(letra => {
      return (letra != 'a' && letra != 'b' && letra != 'c')
   }).join('')
   return newString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   arrayOfStrings.sort( (a,b)=>{
      if(a.length > b.length){return 1}
      if(a.length < b.length){return -1}
      return 0
   }  )
   return arrayOfStrings
}
// console.log(sortArray(['hola', 'averahora', 'asies']))
function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let newArray = []
   array1.forEach(num1 => {
      array2.map(num2 => {
         if (num1 == num2) { newArray.push(num1) }
      })
   })
   return newArray
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
