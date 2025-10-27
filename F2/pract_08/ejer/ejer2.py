import reflex as rx

class State(rx.State):
    mostrar_solo_pendientes: bool = False
    
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
    
    def toggle_filtro(self):
        self.mostrar_solo_pendientes = not self.mostrar_solo_pendientes
    
    @rx.var
    def tareas_en_progreso_filtradas(self) -> list:
        if self.mostrar_solo_pendientes:
            return [t for t in self.tareas_en_progreso if t["estado"] == "Pendiente"]
        return self.tareas_en_progreso
    
    @rx.var
    def tareas_completadas_filtradas(self) -> list:
        if self.mostrar_solo_pendientes:
            return [t for t in self.tareas_completadas if t["estado"] == "Pendiente"]
        return self.tareas_completadas
    
    @rx.var
    def todas_las_tareas(self) -> list:
        return self.tareas_en_progreso + self.tareas_completadas
    
    @rx.var
    def contadores(self) -> dict:
        contadores = {"Total": len(self.todas_las_tareas)}
        for tarea in self.todas_las_tareas:
            estado = tarea["estado"]
            contadores[estado] = contadores.get(estado, 0) + 1
        return contadores

def tarjeta_tarea(tarea):
    return rx.card(
        rx.text(tarea["titulo"], font_weight="bold"),
        rx.text(f"Estado: {tarea['estado']}", size="sm", color="gray"),
        background={
            "Pendiente": "orange.100",
            "En Progreso": "blue.100", 
            "Completada": "green.100"
        }[tarea["estado"]],
        padding="1em",
        margin="0.5em",
        width="250px"
    )

def columna_kanban(nombre, tareas):
    return rx.vstack(
        rx.heading(nombre, size="md"),
        rx.cond(
            len(tareas) > 0,
            rx.foreach(tareas, tarjeta_tarea),
            rx.text("No hay tareas", color="gray", size="sm")
        ),
        width="300px",
        border="1px solid #e2e8f0",
        padding="1em",
        margin="0.5em",
        border_radius="8px",
        background="white",
        min_height="400px"
    )

def mostrar_contadores():
    return rx.hstack(

        rx.card(
            rx.vstack(
                rx.text("📝 Pendientes", font_weight="bold", size="sm"),
                rx.text(State.contadores.get('Pendiente', 0), size="xl", font_weight="bold"),
            ),
            background="orange.100",
            padding="1em",
            border_radius="8px",
            width="120px"
        ),

        rx.card(
            rx.vstack(
                rx.text("🔄 En Progreso", font_weight="bold", size="sm"),
                rx.text(State.contadores.get('En Progreso', 0), size="xl", font_weight="bold"),
            ),
            background="blue.100",
            padding="1em",
            border_radius="8px",
            width="120px"
        ),

        rx.card(
            rx.vstack(
                rx.text("Completadas", font_weight="bold", size="sm"),
                rx.text(State.contadores.get('Completada', 0), size="xl", font_weight="bold"),
            ),
            background="green.100",
            padding="1em",
            border_radius="8px",
            width="120px"
        ),

        rx.card(
            rx.vstack(
                rx.text("Total", font_weight="bold", size="sm"),
                rx.text(State.contadores['Total'], size="xl", font_weight="bold"),
            ),
            background="purple.100",
            padding="1em",
            border_radius="8px",
            width="120px"
        ),
        spacing="1em",
        justify="center",
        margin_top="2em"
    )

def index():
    return rx.center(
        rx.vstack(
            rx.heading("Tablero Kanban con Contadores", size="lg", margin_bottom="1em"),
            
            rx.button(
                "🔍 Mostrar Solo Pendientes" if not State.mostrar_solo_pendientes else "📋 Mostrar Todas",
                on_click=State.toggle_filtro,
                color_scheme="blue",
                margin_bottom="1em"
            ),
            
            rx.cond(
                State.mostrar_solo_pendientes,
                rx.text("🔍 Filtrando solo tareas PENDIENTES", color="blue", font_style="italic"),
                rx.text("📋 Mostrando TODAS las tareas", color="green", font_style="italic")
            ),
            
            rx.hstack(
                columna_kanban("En Progreso", State.tareas_en_progreso_filtradas),
                columna_kanban("Completadas", State.tareas_completadas_filtradas),
                align="start",
                justify="center",
                spacing="4"
            ),
            
            mostrar_contadores(),
            
            width="100%",
            padding="2em",
            background="gray.50",
            min_height="100vh"
        )
    )

app = rx.App()
app.add_page(index, route="/")