import reflex as rx

config = rx.Config(
    app_name="pract_08",
    plugins=[
        rx.plugins.SitemapPlugin(),
        rx.plugins.TailwindV4Plugin(),
    ]
)

