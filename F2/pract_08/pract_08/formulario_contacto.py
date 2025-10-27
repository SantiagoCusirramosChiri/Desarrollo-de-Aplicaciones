import reflex as rx
import re

class EstadoFormulario(rx.State):
    nombre: str = ""
    email: str = ""
    mensaje: str = ""
    enviado: bool = False
    errores: dict = {}
    
    def validar_email(self, email: str) -> bool:
        patron = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
        return re.match(patron, email) is not None
    
    def validar_formulario(self) -> bool:
        self.errores = {}
        
        if not self.nombre.strip():
            self.errores["nombre"] = "El nombre es obligatorio"
        elif len(self.nombre.strip()) < 2:
            self.errores["nombre"] = "El nombre debe tener 2 caracteres"
        
        if not self.email.strip():
            self.errores["email"] = "El email es obligatorio"
        elif not self.validar_email(self.email):
            self.errores["email"] = "Formato de email inválido"
        
        if not self.mensaje.strip():
            self.errores["mensaje"] = "El mensaje es obligatorio"
        elif len(self.mensaje.strip()) < 10:
            self.errores["mensaje"] = "El mensaje debe tener al menos 10 caracteres"
        
        return len(self.errores) == 0
    
    def enviar_formulario(self):
        if self.validar_formulario():
            self.enviado = True
            return rx.window_alert("Formulario enviado correctamente")
        else:
            return rx.window_alert("Errores del formulario")
    
    def limpiar_formulario(self):
        self.nombre = ""
        self.email = ""
        self.mensaje = ""
        self.enviado = False
        self.errores = {}

def mostrar_error(campo: str) -> rx.Component:
    return rx.cond(
        EstadoFormulario.errores.get(campo),
        rx.text(
            EstadoFormulario.errores[campo],
            color="red",
            size="2"
        ),
        None
    )

def formulario_contacto():
    return rx.vstack(
        rx.heading("Formulario de Contacto", size="lg"),
        
        rx.cond(
            EstadoFormulario.enviado,
            rx.card(
                rx.vstack(
                    rx.text("*-*", size="6", color="green"),
                    rx.heading("¡Formulario Enviado!", size="md", color="green"),
                    rx.text("Hemos recibido tu mensaje. Te contactaremos pronto.", size="3"),
                    rx.button(
                        "Enviar otro mensaje",
                        on_click=EstadoFormulario.limpiar_formulario,
                        color_scheme="blue"
                    ),
                    spacing="3",
                    align="center"
                ),
                background="green.50",
                width="100%"
            ),
            rx.vstack(
                rx.vstack(
                    rx.text("Nombre", size="3", weight="bold"),
                    rx.input(
                        value=EstadoFormulario.nombre,
                        on_change=EstadoFormulario.set_nombre,
                        placeholder="Ingresa tu nombre completo",
                        size="3"
                    ),
                    mostrar_error("nombre"),
                    spacing="1",
                    align="start",
                    width="100%"
                ),
                
                rx.vstack(
                    rx.text("Email", size="3", weight="bold"),
                    rx.input(
                        value=EstadoFormulario.email,
                        on_change=EstadoFormulario.set_email,
                        placeholder="ejemplo@correo.com",
                        size="3"
                    ),
                    mostrar_error("email"),
                    spacing="1",
                    align="start",
                    width="100%"
                ),
                
                rx.vstack(
                    rx.text("Mensaje", size="3", weight="bold"),
                    rx.text_area(
                        value=EstadoFormulario.mensaje,
                        on_change=EstadoFormulario.set_mensaje,
                        placeholder="Escribe tu mensaje aquí...",
                        size="3",
                        min_height="120px"
                    ),
                    mostrar_error("mensaje"),
                    spacing="1",
                    align="start",
                    width="100%"
                ),
                
                rx.hstack(
                    rx.button(
                        "Enviar Mensaje",
                        on_click=EstadoFormulario.enviar_formulario,
                        size="3",
                        color_scheme="green"
                    ),
                    rx.button(
                        "Limpiar",
                        on_click=EstadoFormulario.limpiar_formulario,
                        size="3",
                        variant="soft"
                    ),
                    spacing="3",
                    justify="end",
                    width="100%"
                ),
                
                spacing="5",
                width="100%"
            )
        ),
        
        spacing="6",
        width="100%",
        max_width="600px",
        align="center"
    )

def index():
    return rx.container(
        rx.vstack(
            formulario_contacto(),
            align="center",
            min_height="100vh",
            padding_y="2rem"
        ),
        padding="0"
    )

app = rx.App()
app.add_page(index, route="/")