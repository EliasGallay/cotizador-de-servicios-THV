const montoDeObraHM =[36, 54, 182, 638, 910];
const honorarioMinimoHM =[2.52, 3.51, 10.92, 35.09, 52.04]
const valorHM = (350000)
const valorKW = parseFloat(valorHM*0.967)


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
        calculoInstalacionesElectricas();
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
        alert("salir")
        break;
    default:
      alert("Opción no válida, intenta de nuevo.");
  }
} while (opcion !== 6);



}

function calculoPiping(){
    let valorMetroPiping = (valorHM *0.15);
    alert("se esta realizando calculo de piping");
}

function calculoRelevamientoDeMaquinarias(){
    alert("se esta realizando calculo de relevamiento de maquinarias");
}

function calculoInstalacionesElectricas(){
    alert("se esta realizando calculo de instalaciones electricas ");
}

function calculoDigitalizacionDePlanos(){
    alert("se esta realizando calculo de digitalizacion de planos");
    let horasCadista = parseFloat(prompt('ingrese la cantidad de horas cadista aproximadas'));
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

function calculoIngenieriaBasicaDeProyecto(){
    alert("se esta realizando calculo de ingenieria basica de proyecto ");
}



principal()
