const montoDeObraHM =[36, 54, 182, 638, 910];
const honorarioMinimoHM =[2.52, 3.51, 10.92, 35.09, 52.04];
const valorHM = (350000);
const valorKW = parseFloat(valorHM*0.967);
let presupuestoCadista = 0;
let presupuestoFinalInstalacionesElectricas = 0;

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
        alert("para calcular el presupuesto de piping primero debemos calcular obra electrica y horas cadista ")
        presupuestoFinalInstalacionesElectricas=(calculoPresupuestoInstalacionElectrica(valorHM, valorKW));
        alert(presupuestoFinalInstalacionesElectricas)
        presupuestoCadista = calculoDigitalizacionDePlanos();
        alert(presupuestoCadista[1])
        let presupuestoFinalPiping = calculoPiping(presupuestoCadista[1], presupuestoFinalInstalacionesElectricas);
        alert(presupuestoFinalPiping)
        break;
    case 2:
        calculoRelevamientoDeMaquinarias();
        break;
    case 3:
        presupuestoFinalInstalacionesElectricas=(calculoPresupuestoInstalacionElectrica(valorHM, valorKW)); // listo
        alert(presupuestoFinalInstalacionesElectricas)
        break;
    case 4:
        presupuestoCadista = calculoDigitalizacionDePlanos(); //listo
        alert(`$${presupuestoCadista[0]} este es el precio en pesos`);
        alert(`${presupuestoCadista[1]} este es el precio en float`);
        break;
    case 5:
        alert("para calcular ingenieria basica de proyecto primero debemos calcular obra electrica y horas cadista")
        presupuestoFinalInstalacionesElectricas=(calculoPresupuestoInstalacionElectrica(valorHM, valorKW));
        alert(presupuestoFinalInstalacionesElectricas)
        presupuestoCadista = calculoDigitalizacionDePlanos();
        alert(presupuestoCadista[1])
        let presupuestoFinalIngenieriaBasica = calculoIngenieriaBasicaDeProyecto(presupuestoCadista[1], presupuestoFinalInstalacionesElectricas );
        alert(presupuestoFinalIngenieriaBasica)
        break;
    case 6:
        alert("salir");
        break;
    default:
      alert("Opción no válida, intenta de nuevo.");
  }
} while (opcion !== 6);
}

function calculoPiping(obraElectrica, HoraCad) {
    let valorMetroPiping = valorHM * 0.15;

    alert("Se está realizando el cálculo de Piping. \nIngrese los metros lineales de Piping.");

    let metrosLinealesPiping = parseFloat(prompt("Ingrese los metros lineales de Piping:"));

    if (isNaN(metrosLinealesPiping) || metrosLinealesPiping <= 0) {
        alert("Por favor, ingrese un valor válido para los metros lineales de Piping.");
        return;
    }


    if (isNaN(obraElectrica) || obraElectrica <= 0 || isNaN(HoraCad) || HoraCad <= 0) {
        alert("Por favor, ingrese valores válidos para la obra eléctrica y horas de CAD.");
        return;
    }

    let presupuestoPiping = (obraElectrica + HoraCad) + (metrosLinealesPiping * valorMetroPiping);

    return parseFloat(presupuestoPiping);
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
    return [presupuestoFormateado, presupuestoFinalCadista.toFixed(2)];
    // return parseFloat(presupuestoFinalCadista.toFixed(2));
}

function calculoIngenieriaBasicaDeProyecto(presuCad, presuObraElectrica) {
    presuCad = parseFloat(presuCad);
    presuObraElectrica = parseFloat(presuObraElectrica);

    if (isNaN(presuCad) || isNaN(presuObraElectrica)) {
        alert("Los valores de presupuesto CAD o eléctrico no son válidos. Verifique los datos.");
        return;
    }

    let montoDeObraCivil = parseFloat(prompt("Ingrese monto de obra civil en pesos:"));
    if (isNaN(montoDeObraCivil) || montoDeObraCivil <= 0) {
        alert('Por favor, ingrese un valor numérico válido.');
        return;
    }

    let calculoObraCivil = montoDeObraCivil * 0.01;
    alert(`El cálculo de obra civil es: $${calculoObraCivil.toFixed(2)}`);

    let presuIngenieriaBasica = presuCad + presuObraElectrica + calculoObraCivil;
    return presuIngenieriaBasica;
}


principal();

//toDo: revisar error en calculo de Piping, desarrollar relevamiento de maquinarias