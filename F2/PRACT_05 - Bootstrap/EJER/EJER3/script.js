let carrito = [];

function agregarAlCarrito(nombre, precio) {
    const productoExistente = carrito.find(item => item.nombre === nombre);
        
    if (productoExistente) {
        productoExistente.cantidad++;
    } else {
        carrito.push({ nombre, precio, cantidad: 1 });
    }

    actualizarCarrito();    
}

function actualizarCarrito() {
    const listaCarrito = document.getElementById('listaCarrito');
    const totalCarrito = document.getElementById('totalCarrito');
    const cantidadCarrito = document.getElementById('cantidadCarrito');

    const totalProductos = carrito.reduce((sum, item) => sum + item.cantidad, 0);
    cantidadCarrito.textContent = totalProductos;
        
    if (carrito.length === 0) {
        listaCarrito.innerHTML = '<p class="text-center text-muted">El carrito está vacío</p>';
        totalCarrito.textContent = '0.00';
        return;
    }
        
    let html = '';
    let total = 0;
        
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
            
        html += `
                <div class="card mb-2">
                <div class="card-body p-2">
                    <h6>${item.nombre}</h6>
                    <div class="d-flex justify-content-between align-items-center">
                        <span>$${item.precio} x ${item.cantidad}</span>
                        <button class="btn btn-sm btn-danger" onclick="eliminarDelCarrito(${index})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                    <strong>Subtotal: $${subtotal.toFixed(2)}</strong>
                </div>
            </div>
        `;
    });
        
        listaCarrito.innerHTML = html;
        totalCarrito.textContent = total.toFixed(2);
    }


function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

function vaciarCarrito() {
    if (confirm('¿Seguro que quieres vaciar el carrito?')) {
        carrito = [];
        actualizarCarrito();
    }
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert('El carrito está vacío');
        return;
    }
        
    const total = carrito.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
    alert(`Compra finalizada!\nTotal: $${total.toFixed(2)}\n\nGracias por tu compra!`);
    carrito = [];
    actualizarCarrito();
}