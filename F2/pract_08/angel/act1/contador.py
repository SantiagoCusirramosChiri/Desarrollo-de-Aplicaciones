"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from rxconfig import config


class EstadoContador(rx.State):
    """Estado reactivo del contador."""
    conteo: int = 0 

    def incrementar(self):
        self.conteo += 1

    def disminuir(self):
        self.conteo -= 1


def contador():
    """Componente principal del contador."""
    return rx.center(
        rx.vstack(
            rx.heading("Contador en Reflex", size="8"),
            rx.text(EstadoContador.conteo, font_size="4em"),
            rx.hstack(
                rx.button("incrementar contador", on_click=EstadoContador.incrementar, color_scheme="blue"),
                rx.button("disminuir contador", on_click=EstadoContador.disminuir, color_scheme="yellow"),
            ),
            spacing="4",
        ),
        height="100vh",
    )


app = rx.App()
app.add_page(contador, route="/")
