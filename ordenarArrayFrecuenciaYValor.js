var arr = [5,1,5,4,3,5,5,3];
console.log("---------ordenado frec asc y value asc  ------------------------");
console.log("Entrada arr: ", arr);
console.log("Salida res:  ", ordenaVectorXFrecYValor(arr));
console.log("---------ordenado frec desc y value asc ------------------------");
console.log("Salida res:  ", ordenaVectorXFrecDescYValor(arr));



function Frec(pnro, pfrec) {
    this.nro  = pnro;
    this.frec = pfrec;
}

function generaSalidaDesdeVecPares(fs) {
    var arrord = []
    for (var i = 0; i < fs.length; i++) {
        for(var j = 0; j < fs[i].frec;j++)
        arrord.push(fs[i].nro);
    }
    return arrord;
}

function obtieneVectorParesFrec(arr) {
    arr.sort();
    
    var fs = [];
    var frec = 1, ant = arr[0];
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
    return fs;

    
}

function ordenaVectorXFrecYValor(arr) {
    var fs = obtieneVectorParesFrec(arr);

    //ordena por frecuencia y valor
    fs.sort(function(a,b){
        return (parseInt(a.frec * 100 + a.nro) - parseInt(b.frec * 100 + b.nro))
    })
    
    return generaSalidaDesdeVecPares(fs);
}


function ordenaVectorXFrecDescYValor(arr) {
    var fs = obtieneVectorParesFrec(arr);
    
    //ordena por frecuencia y valor
     var fsorddes = fs.sort(function(a,b){
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
    });
 
    return generaSalidaDesdeVecPares(fsorddes);
}    



