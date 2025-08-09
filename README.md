# 🚗 EcoMovil - Frontend

**EcoMovil** es una plataforma web para la compra, venta y alquiler de vehículos ecológicos (bicicletas, scooters eléctricos, autos híbridos, etc.). Permite a estudiantes universitarios publicar sus vehículos y a otros usuarios adquirirlos de manera fácil y segura.

## 🌟 Características

- 🔐 Sistema de autenticación y registro
- 🚙 Gestión de vehículos ecológicos
- 🗺️ Mapa interactivo con ubicaciones
- 👤 Perfiles de usuarios (Propietarios y Adquirientes)
- 💳 Sistema de planes y pagos
- 📱 Diseño responsivo con Angular Material y PrimeNG

## 🚀 Cómo ejecutar el proyecto

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm
- Angular CLI: `npm install -g @angular/cli`

### Pasos para ejecutar

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd Front-End-EcoMovil
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar el servidor de desarrollo**
   ```bash
   npm start
   # o alternativamente:
   ng serve
   ```

4. **Abrir en el navegador**
   ```
   http://localhost:4200
   ```

### 🔧 Configuración del Backend

Asegúrate de que el backend esté ejecutándose en `http://localhost:8080`. 
La configuración se encuentra en `src/environments/environment.ts`.

## 🛠️ Tecnologías utilizadas

- **Angular 18** - Framework principal
- **TypeScript** - Lenguaje de programación
- **Angular Material** - Componentes UI
- **PrimeNG** - Biblioteca de componentes
- **Tailwind CSS** - Framework de estilos
- **Google Maps** - Mapas interactivos
- **ngx-translate** - Internacionalización

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── auth/              # Autenticación
│   ├── movilizing/        # Gestión de vehículos
│   ├── ProfileAcquirers/  # Perfiles de compradores
│   ├── public/            # Páginas públicas
│   ├── SelectionPlanes/   # Planes y pagos
│   └── shared/            # Componentes compartidos
├── environments/          # Configuraciones de entorno
└── assets/               # Recursos estáticos
```

## 🌐 URLs principales

- `/login` - Iniciar sesión
- `/election` - Selección de tipo de usuario
- `/dashboard` - Panel principal
- `/home` - Página de inicio para compradores
- `/myVehicles` - Mis vehículos
- `/postVehicle` - Publicar vehículo

---
*Desarrollado con Angular 18.2.4*
