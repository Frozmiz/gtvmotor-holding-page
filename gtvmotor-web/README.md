## GTVMOTOR Holding Page

### Objetivo
Holding/coming soon page para los dominios `gtvmotor.es` y `gtvmotor.co.uk`, construida con Astro + Tailwind con foco en un diseño sobrio para automoción.

### Stack
- Astro 5 + Islands routing minimal
- TailwindCSS 4 con configuración extendida de colores (`gtvorange`, `gtvgray`)
- Bun como runtime y gestor de scripts

### Scripts Bun
| Comando | Descripción |
| --- | --- |
| `bun install` | Instala dependencias |
| `bun dev` | Levanta el servidor de desarrollo en `http://localhost:4321` |
| `bun run build` | Genera la versión de producción en `dist/` |
| `bun run preview` | Sirve la build para validación previa al deploy |

### Arquitectura
```
src/
  layouts/BaseLayout.astro   -> Layout oscuro con SEO básico y slot centrado
  components/Logo.astro      -> Logo escalable (sm/md/lg) con opción de asset externo
  pages/index.astro          -> Página principal con bloques ES/UK, footer dinámico
  styles/globals.css         -> Importa Tailwind y aplica estilos globales del body
public/
  favicon.svg
  logo-gtvmotor.svg          -> Placeholder sustituible por el logo oficial
tailwind.config.ts           -> Tema extendido y paths de contenido
```

### Deploy en Vercel
1. Crear proyecto en Vercel importando este repositorio.
2. Seleccionar framework `Astro` (Vercel lo detecta automáticamente).
3. Definir variable `BUILD_COMMAND = bun run build` y `OUTPUT_DIR = dist`.
4. Habilitar instalación automática con `bun install` en la pestaña de ajustes.
5. Deployar. Cada push a `main` generará un nuevo deploy.

### Mantenimiento rápido
- Textos/contactos: editar los `const` al inicio de `src/pages/index.astro`.
- Logo: reemplazar `public/logo-gtvmotor.svg` o usar `<Logo useAsset />`.
- Colores corporativos: actualizar `tailwind.config.ts`.
- Fondo global: modificar `body` dentro de `src/styles/global.css`.

### Calidad
- Clean code: layout desacoplado, constantes para datos editables, componentes reutilizables.
- Responsive móvil-first mediante utilidades Tailwind y grid adaptativo.
- Tipografía y colores accesibles, contraste alto para modo oscuro.
