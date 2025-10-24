import reflex as rx

class State(rx.State):
    mostrar_solo_pendientes: bool = False
    
    # Datos de ejemplo para las tareas
    tareas_en_progreso: list = [
        {"titulo": "Tarea 1", "estado": "Pendiente"},
        {"titulo": "Tarea 2", "estado": "En Progreso"},
        {"titulo": "Tarea 3", "estado": "Pendiente"}
    ]
    
    tareas_completadas: list = [
        {"titulo": "Tarea 4", "estado": "Completada"},
        {"titulo": "Tarea 5", "estado": "Pendiente"},
        {"titulo": "Tarea 6", "estado": "Completada"}
    ]
    
    def mostrar_pendientes(self):
        self.mostrar_solo_pendientes = True
    
    def mostrar_todas(self):
        self.mostrar_solo_pendientes = False
    
    # Propiedad computada para obtener todas las tareas
    @rx.var
    def todas_las_tareas(self) -> list:
        return self.tareas_en_progreso + self.tareas_completadas

def contar_tareas_por_estado(tareas):
    contadores = {}
    for tarea in tareas:
        estado = tarea["estado"]
        if estado in contadores:
            contadores[estado] += 1
        else:
            contadores[estado] = 1
    return contadores

def tarjeta_tarea(tarea):
    return rx.card(
        rx.text(tarea["titulo"], font_weight="bold"),
        rx.text(f"Estado: {tarea['estado']}", size="sm", color="gray"),
        background="lightblue",
        padding="1em",
        margin="0.5em",
        width="250px"
    )

def columna_kanban(nombre, tareas):
    # Filtra las tareas según el estado
    if State.mostrar_solo_pendientes:
        tareas_filtradas = [t for t in tareas if t["estado"] == "Pendiente"]
    else:
        tareas_filtradas = tareas
    
    return rx.vstack(
        rx.heading(nombre, size="md"),
        rx.foreach(tareas_filtradas, tarjeta_tarea),
        width="300px",
        border="1px solid gray",
        padding="1em",
        margin="0.5em",
        border_radius="8px",
        background="white"
    )

def mostrar_contadores():
    contadores = contar_tareas_por_estado(State.todas_las_tareas)
    
    return rx.hstack(
        rx.card(
            rx.vstack(
                rx.text("Pendientes", font_weight="bold"),
                rx.text(contadores.get('Pendiente', 0), size="xl", font_weight="bold"),
            ),
            background="orange.100",
            padding="1em",
            border_radius="8px"
        ),
        rx.card(
            rx.vstack(
                rx.text("En Progreso", font_weight="bold"),
                rx.text(contadores.get('En Progreso', 0), size="xl", font_weight="bold"),
            ),
            background="blue.100",
            padding="1em",
            border_radius="8px"
        ),
        rx.card(
            rx.vstack(
                rx.text("Completadas", font_weight="bold"),
                rx.text(contadores.get('Completada', 0), size="xl", font_weight="bold"),
            ),
            background="green.100",
            padding="1em",
            border_radius="8px"
        ),
        rx.card(
            rx.vstack(
                rx.text("Total", font_weight="bold"),
                rx.text(len(State.todas_las_tareas), size="xl", font_weight="bold"),
            ),
            background="purple.100",
            padding="1em",
            border_radius="8px"
        ),
        spacing="1em",
        justify="center",
        margin_top="2em"
    )

def index():
    return rx.center(
        rx.vstack(
            rx.hstack(
                rx.button(
                    "Mostrar Pendientes", 
                    on_click=State.mostrar_pendientes,
                    color_scheme="blue",
                    margin_right="1em"
                ),
                rx.button(
                    "Mostrar Todas", 
                    on_click=State.mostrar_todas,
                    color_scheme="gray"
                ),
                justify="center",
                margin_bottom="2em"
            ),
            
            rx.text(
                "Filtrando solo pendientes" if State.mostrar_solo_pendientes else "Mostrando todas las tareas",
                font_style="italic",
                color="gray.600",
                margin_bottom="1em"
            ),
            
            rx.hstack(
                columna_kanban("En Progreso", State.tareas_en_progreso),
                columna_kanban("Completadas", State.tareas_completadas),
                align="start",
                justify="center"
            ),
            
            # Mostrar contadores
            mostrar_contadores(),
            
            width="100%",
            padding="2em",
            background="gray.50",
            min_height="100vh"
        )
    )

app = rx.App()
app.add_page(index)