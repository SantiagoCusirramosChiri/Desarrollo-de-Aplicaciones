import reflex as rx
from rxconfig import config


class EstadoTareas(rx.State):
    tareas: list[str] = ["Tarea 1", "Tarea 2"]
    nueva_tarea: str = ""

    def set_nueva_tarea(self, valor: str):
        self.nueva_tarea = valor

    def agregar_tarea(self):
        if self.nueva_tarea.strip():
            self.tareas.append(self.nueva_tarea.strip())
            self.nueva_tarea = ""


def lista_tareas():
    return rx.vstack(
        rx.heading("Esta es la lista de tareas"),
        rx.list(
            rx.foreach(EstadoTareas.tareas, lambda t: rx.list_item(t))
        ),
    )


def agregar_tarea():
    return rx.hstack(
        rx.input(
            placeholder="Agrega una nueva tarea",
            value=EstadoTareas.nueva_tarea,
            on_change=EstadoTareas.set_nueva_tarea, 
        ),
        rx.button("Agregar", on_click=EstadoTareas.agregar_tarea),
    )


def index():
    return rx.vstack(lista_tareas(), agregar_tarea(), spacing="4")


app = rx.App()
app.add_page(index, route="/")

