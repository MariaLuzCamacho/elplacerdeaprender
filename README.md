# Sitio estático — El Placer de Aprender

Sitio HTML listo para subir a cualquier hosting **sin PHP ni base de datos**.

## Desplegar

1. Sube **todo el contenido** de esta carpeta `sitio/` a `public_html/` de tu hosting.
2. Apunta el dominio `elplacerdeaprender.edu.co` al hosting.
3. Activa SSL (HTTPS) en cPanel.

## Formulario de contacto (Formspree)

1. Crea una cuenta gratis en [https://formspree.io](https://formspree.io)
2. Crea un formulario con el correo `colelplacerdeaprender@gmail.com`
3. Copia tu ID de formulario (ej: `xyzabcde`)
4. Edita `tools/build-static.mjs` → cambia `YOUR_FORM_ID` por tu ID
5. Regenera: `node tools/build-static.mjs`

## Regenerar el sitio

Si cambias contenido en la carpeta `web/`:

```bash
node tools/build-static.mjs
```

## Videos

Coloca los archivos `.mp4` en `sitio/assets/files/`:

- `67d21189bf8b017.mp4` (Historia)
- `67d213a5aa51017.mp4` (Misión/Visión)
