import reflex as rx

class State(rx.State):
    # No necesitas __init__ en Reflex, usa vars de clase
    mostrar_solo_pendientes: bool = False
    
    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True
    
    # También necesitas datos de ejemplo para las tareas
    tareas_en_progreso: list = [
        {"titulo": "Tarea 1", "estado": "Pendiente"},
        {"titulo": "Tarea 2", "estado": "En Progreso"}
    ]
    
    tareas_completadas: list = [
        {"titulo": "Tarea 3", "estado": "Completada"},
        {"titulo": "Tarea 4", "estado": "Pendiente"}
    ]

def tarjeta_tarea(tarea):
    return rx.card(
        rx.text(tarea["titulo"]),
        rx.text(f"Estado: {tarea['estado']}"),
        background="lightblue",
        padding="1em",
        margin="0.5em"
    )

def columna_kanban(nombre, tareas):
    # Accede al estado correctamente
    if State.mostrar_solo_pendientes:
        tareas_filtradas = [t for t in tareas if t["estado"] == "Pendiente"]
    else:
        tareas_filtradas = tareas
    
    return rx.vstack(
        rx.heading(nombre),
        rx.foreach(tareas_filtradas, tarjeta_tarea),
        width="300px",
        border="1px solid gray",
        padding="1em",
        margin="0.5em"
    )

def index():
    return rx.center(
        rx.vstack(
            rx.button(
                "Mostrar Pendientes", 
                on_click=State.mostrar_pendientes,
                color_scheme="blue",
                margin_bottom="2em"
            ),
            rx.hstack(
                columna_kanban("En Progreso", State.tareas_en_progreso),
                columna_kanban("Completadas", State.tareas_completadas),
                align="start"
            ),
            width="100%",
            padding="2em"
        )
    )

app = rx.App()
app.add_page(index)