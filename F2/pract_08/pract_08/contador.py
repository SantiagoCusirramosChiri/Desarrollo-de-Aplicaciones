import reflex as rx

class EstadoContador(rx.State):
    conteo: int = 0
    
    def incrementar(self):
        self.conteo += 1
    
    def disminuir(self):
        self.conteo -= 1

def contador():
    return rx.hstack(
        rx.button(
            "Disminuir", 
            on_click=EstadoContador.disminuir,
            color_scheme="red",
            size="3"
        ),
        rx.text(
            EstadoContador.conteo, 
            width="100px",
            text_align="center",
            font_size="24px",
            font_weight="bold"
        ),
        rx.button(
            "Incrementar", 
            on_click=EstadoContador.incrementar,
            color_scheme="green",
            size="3"
        ),
        spacing="4",
        justify="center",
        align="center"
    )

def index():
    return rx.container(
        rx.vstack(
            rx.heading("Contador Simple con Reflex", size="lg"),
            contador(),
            rx.text("Haz clic en los botones para cambiar el valor", size="sm"),
            spacing="6",
            justify="center",
            align="center",
            height="100vh"
        )
    )

app = rx.App()
app.add_page(index)