const montoDeObraHM = [36, 54, 182, 638, 910];
const honorarioMinimoHM = [2.52, 3.51, 10.92, 35.09, 52.04];
const valorHM = (350000);
const valorKW = parseFloat(valorHM * 0.967);
let presupuestoCadista = 0;
let presupuestoFinalInstalacionesElectricas = 0;









function calculoPiping(HoraCad, obraElectrica) {
    let valorMetroPiping = valorHM * 0.15;

    alert("Se está realizando el cálculo de Piping. \nIngrese los metros lineales de Piping.");

    let metrosLinealesPiping = parseFloat(prompt("Ingrese los metros lineales de Piping:"));

    if (isNaN(metrosLinealesPiping) || metrosLinealesPiping <= 0) {
        alert("Por favor, ingrese un valor válido para los metros lineales de Piping.");
        return;
    }

    let presupuestoPiping = (obraElectrica + HoraCad) + (metrosLinealesPiping * valorMetroPiping);

    return parseFloat(presupuestoPiping);
}



let final=calculoPiping(1225000.000, 19211500.000)

alert(final + " ESTE ES EL PRESUPUESTO FINAL");