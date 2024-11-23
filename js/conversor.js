function conversorNumeroPesos(numero) {
    let conversion = new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(numero);
    return conversion;
}

alert(conversorNumeroPesos(599.00));