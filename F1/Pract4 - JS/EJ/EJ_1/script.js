function calcularPropina(montoCuenta, porcentajePropina) {
    let propina = montoCuenta * (porcentajePropina / 100);
    let total = montoCuenta + propina;
    return {
        propina: propina.toFixed(2),
        total: total.toFixed(2)
    };
}

function mostrarResultado() {
    let montoCuenta = parseFloat(document.getElementById("montoCuenta").value);
    let porcentajePropina = parseFloat(document.getElementById("porcentajePropina").value);

    if (isNaN(montoCuenta) || isNaN(porcentajePropina)) {
        document.getElementById("resultado").innerHTML = "error: ingrese valores válidos.";
        return;
    }

    let resultado = calcularPropina(montoCuenta, porcentajePropina);

    document.getElementById("resultado").innerHTML =
        "Cantidad de propina a pagar: S/." + resultado.propina + "<br>" +
        "Total a pagar: S/." + resultado.total;
}