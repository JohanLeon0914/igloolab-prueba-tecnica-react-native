# 📱 Gestión de Productos - React Native Expo

Este proyecto es la versión móvil de la aplicación de gestión de productos, desarrollada con **React Native**, **Expo** y **TypeScript**. Permite listar, agregar y eliminar productos de una base de datos MySQL.

## 📋 Requisitos Previos
- **Ejecutar el backend que puedes encontrar en:** [igloolab-prueba-tecnica-backend](https://github.com/JohanLeon0914/igloolab-prueba-tecnica-backend)
- **Ngrok u otro medio para exponer el puerto 3001 del backend**
- **Node.js** (v16+)
- **npm** (v8+)
- **Expo CLI** (v6+)

## 🚀 Instalación y Configuración

### 1. Clonar el repositorio
```bash
git clone https://github.com/JohanLeon0914/igloolab-prueba-tecnica-react-native
cd igloolab-prueba-tecnica-react-native
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar URL de la API
Entra a app/const/api_url.ts y cambia la url por la de la API ejecutándose en un ngrok u otro medio para exponer el puerto 3001 (el puerto del backend) de manera publica:
```bash
API_URL='url_puerto_3001_ngrok'
```

### 4. Ejecutar la aplicación en modo desarrollo
```bash
npx expo start
```
Esto abrirá el servidor de Expo, donde puedes escanear el código QR con la app de Expo Go en tu dispositivo o ejecutar en un emulador.

## 📱 Ejecutar en dispositivos/emuladores
- **Android:**
  ```bash
  npm run android
  ```
- **iOS (requiere macOS y Xcode):**
  ```bash
  npm run ios
  ```

## 🛠 Tecnologías Utilizadas
- **React Native**: Framework para desarrollo móvil.
- **Expo**: Plataforma para desarrollo y prueba rápida.
- **TypeScript**: Tipado estático para mayor robustez.
- **Axios**: Consumo de API REST.

## 📄 Funcionalidades
- 🔍 Listado de productos
- ➕ Agregar nuevos productos
- 🗑️ Eliminar productos

## 📌 Notas
- Asegúrate de que el backend esté corriendo en `http://localhost:3001` y exponer este puerto de manera publica mediante ngrok o cualquier otro medio y colocar la URL generada en app/const/api_url.ts.
