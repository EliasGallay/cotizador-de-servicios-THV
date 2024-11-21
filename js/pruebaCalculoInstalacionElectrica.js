
const montoDeObraHM = [36, 54, 182, 638, 910];
const honorarioMinimoHM = [2.52, 3.51, 10.92, 35.09, 52.04];
const valorHM = 350000;
const valorKW = parseFloat(valorHM * 0.967);

function calculoPresupuestoInstalacionElectrica(ValHM, ValKW) {
    let potenciaInstalada = parseFloat(prompt('Ingrese la potencia instalada en su obra:'));
    if (isNaN(potenciaInstalada) || potenciaInstalada <= 0) {
        alert('Por favor, ingrese un valor numérico válido para la potencia.');
        return;
    }

    let valorInstalacionElectrica = potenciaInstalada * ValKW;
    let valorDeInstalacionElectricaHM = valorInstalacionElectrica / ValHM;
    let auxValor = valorDeInstalacionElectricaHM;
    let contador = 0;

    while (contador < montoDeObraHM.length && auxValor > montoDeObraHM[contador]) {
        auxValor -= montoDeObraHM[contador];
        contador++;
    }

    let resto = auxValor * 0.05;

    let auxHonorarioMinimo = 0;
    for (let i = 0; i < contador; i++) {
        auxHonorarioMinimo += honorarioMinimoHM[i];
    }

    let final = (auxHonorarioMinimo + resto) * ValHM;

    return final.toFixed(2);
}

alert(calculoPresupuestoInstalacionElectrica(valorHM, valorKW));
