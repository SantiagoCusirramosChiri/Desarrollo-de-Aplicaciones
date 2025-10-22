import reflex as rx

class EstadoTareas(rx.State):
    tareas: list[str] = ["Tarea 1", "Tarea 2"]
    nueva_tarea: str = ""
    
    def agregar_tarea(self):
        if self.nueva_tarea.strip():
            self.tareas.append(self.nueva_tarea.strip())
            self.nueva_tarea = ""
    
    def eliminar_tarea(self, index: int):
        if 0 <= index < len(self.tareas):
            self.tareas.pop(index)

def lista_tareas():
    return rx.vstack(
        rx.heading("Lista de Tareas", size="lg"),
        rx.cond(
            EstadoTareas.tareas.length() > 0,
            rx.vstack(
                rx.foreach(
                    EstadoTareas.tareas,
                    lambda tarea, index: rx.hstack(
                        rx.text(tarea, size="4"),
                        rx.button(
                            "Eliminar",
                            on_click=lambda: EstadoTareas.eliminar_tarea(index),
                            size="2",
                            color_scheme="red"
                        ),
                        spacing="3",
                        width="100%"
                    )
                ),
                spacing="2"
            ),
            rx.text("No hay tareas pendientes", color="gray")
        ),
        spacing="4",
        width="100%",
        max_width="500px"
    )

def agregar_tarea():
    return rx.vstack(
        rx.heading("Agregar Nueva Tarea", size="md"),
        rx.hstack(
            rx.input(
                value=EstadoTareas.nueva_tarea,
                on_change=EstadoTareas.set_nueva_tarea,
                placeholder="Escribe una nueva tarea...",
                size="3"
            ),
            rx.button(
                "Agregar",
                on_click=EstadoTareas.agregar_tarea,
                size="3",
                color_scheme="green"
            ),
            spacing="3"
        ),
        spacing="3",
        width="100%",
        max_width="500px"
    )

def index():
    return rx.container(
        rx.vstack(
            rx.heading("Gestor de Tareas", size="8"),
            agregar_tarea(),
            rx.divider(),
            lista_tareas(),
            spacing="6",
            padding="2rem",
            align="center",
            min_height="100vh"
        )
    )

app = rx.App()
app.add_page(index)