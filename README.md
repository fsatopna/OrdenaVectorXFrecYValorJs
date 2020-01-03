
***
# Ordenar un vector por frecuencia y valor
***
## Problema: 
Se tiene un vector de enteros, y se desea ordenar el mismo por la frecuencia de cada elemento y para la misma frecuencia por el valor del elemento:

* entrada:  {5, 1, 5, 4, 3, 5, 5, 3}    
* salida :  {1, 4, 3, 3, 5, 5, 5, 5} 

### Entrada
<Table>
  <tr>
      <td>Elementos</td>
      <td>5</td>
      <td>1</td>
      <td>5</td>
      <td>4</td>
      <td>3</td>
      <td>5</td>
      <td>5</td>
      <td>3</td>
   </tr>
   <tr>
</Table>

### Frecuencias
<Table>
  <tr>
      <td>Elemento</td>
      <td>1</td>
      <td>3</td>
      <td>4</td>
      <td>5</td>
   </tr>
   <tr>
    <td>Frecuencia</td>
      <td>1</td>
      <td>2</td>
      <td>1</td>
      <td>4</td>
  </tr>
</Table>

## Objetivo
Comprender y utilizar distintos tipos de contenedores y algoritmos para resolución de problemas de conjunto.

***


## Estrategia: 
* Ordenar el vector.           `{1,3,3,4,5, 5, 5, 5}` 
* Obtener un vector de pares {valor, frecuencia}.   `{(1,1),(3,2),(4,1),(5,4)}`
* Ordenar el vector de pares. `{(1,1),(4,1)(3,2)(5,4)}`
* Obtener la salida desde el vector de pares ordenado. `{1,3,3,4,5,5,5,5}`

* Ordenar el vector.           `{1,3,3,4,5, 5, 5, 5}` 

## Implementación: 
* ### Ordenar el vector.
Esto lo provee el metodo de array.prototype
```
arr.sort();

```

* ### Obtener la salida desde el vector de pares {valor, frecuencia}. (fs)
```
var fs = [];

var frec = 1, 
ant = arr[0];

for (var i = 1; i < arr.length;i++) {
     if (arr[i] == ant) {
         frec++;
     } else {
         var unNro = new Frec(ant,frec);

         frec = 1;
         fs.push(unNro);
     }  
     ant = arr[i];
}
var unNro = new Frec(ant,frec);
fs.push(unNro);
```

* ### Ordenamos vector de pares vector de pares {valor, frecuencia}.
```
fs.sort(function(a,b){
    return (parseInt(a.frec * 100 + a.nro) - parseInt(b.frec * 100 + b.nro))
})
```


* ### Generamos salida ordenada desde vector de pares
```
var arrord = []
for (var i = 0; i < fs.length; i++) {
    for(var j = 0; j < fs[i].frec;j++)
       arrord.push(fs[i].nro);
}
```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Simplemente mostramos el resultado.
```
console.log("-------------------------------------- ");
console.log("resultado:", arrord)
console.log("Salida res:  ", arrord);
```
***

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Alternativa de Ordenar el vector de pares  {desc frecuencia, asc valor}.
```
console.log("---------ordenado frec desc y value asc ------------------------");
// 3 prima: Ordenamos vector de pares
var fs2 = fs.sort(function(a,b){
    if (a.frec < b.frec) 
        return 1;
    else if (a.frec > b.frec)
        return -1;
    else { if (a.nro < b.nro)
               return -1;
            else if (a.nro > b.nro)
                return 1;
            else return 0;
    }
})

```

### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Funcion repetida usada para generar el vector de salida.
```
// 4: Generamos salida ordenada desde vector de pares
var arrord2 = []
for (var i = 0; i < fs2.length; i++) {
    for(var j = 0; j < fs2[i].frec;j++)
       arrord2.push(fs2[i].nro);
}
console.log("Salida res:  ", arrord2);

```


### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Nota: Clase usada para generar el vector de pares.

```
function Frec(pnro, pfrec) {
    this.nro  = pnro;
    this.frec = pfrec;
}

```

