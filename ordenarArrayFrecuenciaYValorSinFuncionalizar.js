var arr = [5,1,5,4,3,5,5,3];
console.log("---------ordenado frec asc y value asc  ------------------------");
console.log("Entrada arr: ", arr);

// 1: Ordenamos el vector de entrada
arr.sort();

// 2: Generamos vector de pares, elemento(unico) y frecuencia
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



// 3: Ordenamos vector de pares
fs.sort(function(a,b){
    return (parseInt(a.frec * 100 + a.nro) - parseInt(b.frec * 100 + b.nro))
})

// 4: Generamos salida ordenada desde vector de pares
var arrord = []
for (var i = 0; i < fs.length; i++) {
    for(var j = 0; j < fs[i].frec;j++)
       arrord.push(fs[i].nro);
}

console.log("-------------------------------------- ");
console.log("resultado:", arrord)
console.log("Salida res:  ", arrord);

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

// 4: Generamos salida ordenada desde vector de pares
var arrord2 = []
for (var i = 0; i < fs2.length; i++) {
    for(var j = 0; j < fs2[i].frec;j++)
       arrord2.push(fs2[i].nro);
}
console.log("Salida res:  ", arrord2);



function Frec(pnro, pfrec) {
    this.nro  = pnro;
    this.frec = pfrec;
}

