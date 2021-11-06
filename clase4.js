

function descuento ( precio , banco ){

    if( banco == "nacion"){
        let descuentoPrecio = precio * 0.10;
        
        return descuentoPrecio;
    }

    else if( banco == "isbc"){
        let descuentoPrecio = precio * 0.15;
    
        return descuentoPrecio;
    }

    else if(banco == "bbva"){
        let descuentoPrecio = precio * 0.20;
        
        return descuentoPrecio;
    }
}


function iva (precio){
    let iva = precio * 0.21;
    return iva;
}

let precio = prompt ("Ingrese el precio del producto");
let banco = prompt ("Ingrese el banco");

let resultado = (precio - descuento (precio, banco)) + iva (precio);
console.log (resultado);