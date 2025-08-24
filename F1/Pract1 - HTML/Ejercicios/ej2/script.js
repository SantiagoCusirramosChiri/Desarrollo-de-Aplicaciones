function validarPassword() {
    const password = document.getElementById("password");
    const confirmar = document.getElementById("confirmarPassword");
    const errorDiv = document.getElementById("errorPassword");

    if(password.value !== confirmar.value) {
        confirmar.setCustomValidity("Todo mal bro");
        errorDiv.style.display = "block";
    } else {
        confirmar.setCustomValidity('');
        errorDiv.style.display = "none";
    }
}

function verificarGenero(select) {
    const mensaje = document.getElementById("mensaje-genero");

    if(select.value == 'otro') {
        mensaje.style.display = "block";
        mensaje.classList.add('hidden');
    } else {
        mensaje.style.display = "none";
        mensaje.classList.remove('hidden');
    }
}


document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('registroForm').addEventListener('submit', function (event) {
        if (!this.checkValidity()) {
            event.preventDefault();

            const inputs = this.inputs.querySelectorAll('input');
            inputs.forEach(input => {
                if (!input.validity.valid) {
                    input.reportValidity();
                }
            });

        } else {
            event.preventDefault();
            alert("Formulario valido, eso creo, no se que acabo de codear ._.")
        }
    });
})
