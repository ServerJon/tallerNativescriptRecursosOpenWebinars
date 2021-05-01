# Taller Nativescript Recursos OpenWebinars

Repositorio relacionado con el taller de Accediendo a la cámara y gps con Nativescript de OpenWebinars

## Como ejecutar la aplicación

1. Descargar el proyecto con `git clone https://github.com/ServerJon/tallerNativescriptRecursosOpenWebinars.git`.
2. Instalar dependencias con `npm i`.
3. Añadir la carpeta *platform* del dispositivo que queramos lanzar *android/ios* con `tns platform add <android/ios>`.
4. Ejecutar `tns prepare <android/ios>` para preparar nuestro proyecto.
5. Construir el proyecto `tns build <android/ios>`.
6. Por último lanzar la aplicación en el dispotivo/emulador que queramos `tns run <android/ios>`

## Comandos extra

- Limpiar nuestro proyecto: `tns clean`.
- Eliminar la carpeta *platform* de una plataforma específica: `tns platform remove <android/ios>`.
- Listar los dispositivos conectados o los emuladores activados: `tns devices`
