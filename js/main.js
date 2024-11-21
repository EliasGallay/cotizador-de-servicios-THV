const montoDeObraHM =[36, 54, 182, 638, 910];
const honorarioMinimoHM =[2.52, 3.51, 10.92, 35.09, 52.04];
const valorHM = (350000);
const valorKW = parseFloat(valorHM*0.967);


function principal(){

    let opcion;

do {
  opcion = prompt(
    "Seleccione una opción:\n" +
      "1. Piping\n" +
      "2. Relevamiento de Maquinarias\n" +
      "3. Instalaciones Electricas\n" +
      "4. Digitalizacion de Planos\n" +
      "5. Ingenieria Basica de Proyecto\n"
  );

  opcion = Number(opcion);
  switch (opcion) {
    case 1:
        calculoPiping();
        break;
    case 2:
        calculoRelevamientoDeMaquinarias();
        break;
    case 3:
        alert(calculoPresupuestoInstalacionElectrica(valorHM, valorKW));
        break;
    case 4:
        let presupuestoCadista = calculoDigitalizacionDePlanos();
        alert(`$${presupuestoCadista[0]} este es el precio en pesos`);
        alert(`${presupuestoCadista[1]} este es el precio en float`);
        break;
    case 5:
        calculoIngenieriaBasicaDeProyecto();
        break;
    case 6:
        alert("salir");
        break;
    default:
      alert("Opción no válida, intenta de nuevo.");
  }
} while (opcion !== 6);

//potencia instalada por valor de kw

}

function calculoPiping(){
    let valorMetroPiping = (valorHM *0.15);
    alert("se esta realizando calculo de piping")
}

function calculoRelevamientoDeMaquinarias(){
    alert("se esta realizando calculo de relevamiento de maquinarias")

}

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

function calculoDigitalizacionDePlanos(){
    let horasCadista = parseFloat(prompt('se esta realizando calculo de digitalizacion de planos \n'+'ingrese la cantidad de horas cadista aproximadas'));
    if (isNaN(horasCadista) || horasCadista <= 0) {
        alert("ingrese un numero valido para las horas");
        return;
    }
    let valorHoraCadista= valorHM*0.035;
    let presupuestoFinalCadista=(horasCadista*valorHoraCadista);
    let presupuestoFormateado = new Intl.NumberFormat('es-AR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(presupuestoFinalCadista);
    return [presupuestoFormateado, presupuestoFinalCadista.toFixed(2)]
    // return parseFloat(presupuestoFinalCadista.toFixed(2));
};

function calculoIngenieriaBasicaDeProyecto(){
    alert("se esta realizando calculo de ingenieria basica de proyecto ")
};



principal();

