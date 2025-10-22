import reflex as rx
import httpx

class EstadoDatosAPI(rx.State):
    datos: list = []
    cargando: bool = False
    error: str = ""
    
    async def obtener_datos_api(self):
        try:
            self.cargando = True
            self.error = ""
            
            url = "https://jsonplaceholder.typicode.com/posts"
            
            async with httpx.AsyncClient() as cliente:
                respuesta = await cliente.get(url, timeout=30.0)
                respuesta.raise_for_status()
                datos = respuesta.json()
                self.datos = datos[:5]
                
        except httpx.TimeoutException:
            self.error = "Tiempo de espera agotado"
        except httpx.HTTPStatusError:
            self.error = "Error en la respuesta de la API"
        except Exception as e:
            self.error = f"Error: {str(e)}"
        finally:
            self.cargando = False
    
    def limpiar_datos(self):
        self.datos = []
        self.error = ""

def tarjeta_post(post):
    return rx.card(
        rx.vstack(
            rx.heading(f"#{post['id']}: {post['title'].title()}", size="4"),
            rx.text(post['body'].capitalize(), size="3", color="gray"),
            rx.badge(f"Usuario: {post['userId']}", variant="soft"),
            spacing="3",
            align="start"
        ),
        width="100%"
    )

def mostrar_datos_api():
    return rx.vstack(
        rx.heading("Consumo de API Externa", size="lg"),
        rx.text("Datos de JSONPlaceholder API", size="4", color="gray"),
        
        rx.card(
            rx.hstack(
                rx.button(
                    "Cargar Datos",
                    on_click=EstadoDatosAPI.obtener_datos_api,
                    size="3",
                    color_scheme="blue",
                    is_loading=EstadoDatosAPI.cargando
                ),
                rx.button(
                    "Limpiar",
                    on_click=EstadoDatosAPI.limpiar_datos,
                    size="3",
                    variant="soft"
                ),
                rx.text(f"Total: {EstadoDatosAPI.datos.length()} elementos", size="2"),
                spacing="4",
                justify="between",
                width="100%"
            ),
            width="100%"
        ),
        
        rx.cond(
            EstadoDatosAPI.cargando,
            rx.vstack(
                rx.spinner(size="3"),
                rx.text("Cargando datos...", size="3"),
                spacing="3",
                align="center"
            ),
            rx.cond(
                EstadoDatosAPI.error != "",
                rx.card(
                    rx.text(EstadoDatosAPI.error, color="red", size="3"),
                    background="red.50",
                    width="100%"
                ),
                None
            )
        ),
        
        rx.cond(
            EstadoDatosAPI.datos.length() > 0,
            rx.vstack(
                rx.foreach(EstadoDatosAPI.datos, tarjeta_post),
                spacing="4",
                width="100%"
            ),
            None
        ),
        
        spacing="6",
        width="100%",
        max_width="800px",
        align="center"
    )

def index():
    return rx.container(
        rx.vstack(
            mostrar_datos_api(),
            align="center",
            min_height="100vh",
            padding_y="2rem"
        ),
        padding="0"
    )

app = rx.App()
app.add_page(index)