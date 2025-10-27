import reflex as rx

class State(rx.State):
    mostrar_pendientes: bool = False
    
    def toggle_filtro(self):
        self.mostrar_pendientes = not self.mostrar_pendientes
    
    tareas = [
        {"titulo": "Tarea 1", "estado": "Pendiente", "columna": "en_progreso"},
        {"titulo": "Tarea 2", "estado": "En Progreso", "columna": "en_progreso"},
        {"titulo": "Tarea 3", "estado": "Completada", "columna": "completadas"},
        {"titulo": "Tarea 4", "estado": "Pendiente", "columna": "completadas"}
    ]
    
    @rx.var
    def tareas_filtradas(self):
        return [t for t in self.tareas 
                if not self.mostrar_pendientes or t["estado"] == "Pendiente"]

def tarjeta_tarea(tarea):
    return rx.card(
        rx.text(tarea["titulo"], font_weight="bold"),
        rx.text(tarea["estado"], color="gray", size="2"),
        bg={
            "Pendiente": "orange.100",
            "En Progreso": "blue.100", 
            "Completada": "green.100"
        }[tarea["estado"]],
        padding="1em",
        margin="0.5em"
    )

def index():
    return rx.center(
        rx.vstack(
            rx.button(
                "Mostrar Pendientes" if not State.mostrar_pendientes else "Mostrar Todas",
                on_click=State.toggle_filtro,
                color_scheme="blue"
            ),
            rx.hstack(
                rx.vstack(
                    rx.heading("En Progreso"),
                    rx.foreach(
                        [t for t in State.tareas_filtradas if t["columna"] == "en_progreso"],
                        tarjeta_tarea
                    ),
                    border="1px solid #e2e8f0",
                    padding="1em",
                    width="300px"
                ),
                rx.vstack(
                    rx.heading("Completadas"), 
                    rx.foreach(
                        [t for t in State.tareas_filtradas if t["columna"] == "completadas"],
                        tarjeta_tarea
                    ),
                    border="1px solid #e2e8f0", 
                    padding="1em",
                    width="300px"
                ),
                spacing="4"
            ),
            padding="2em"
        )
    )

app = rx.App()
app.add_page(index)