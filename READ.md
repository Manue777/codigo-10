Primer dia con Git/GitHub
Comando para configurar el usuario y correo

lista de comando Git

Para poder ver la version de Git
git --version
*Para configurar el correo

git config --global user.email "email"
*Para configurar el username

git config --global user.name "username"
*Indica el tipo de lenguaje para dar configuracion en este caso js

console.log("")
Sirve para poder empezar a usar en control de versiones (Git) en nuestra carpeta
git init
Para ver el estado de nuestros cambios
git status
Guarda todos los archivos
git add .
Guarda un archivo especifico
git add READ.md
Para crear el registro de los cambios realizados en el MAIN
git commit -m "Creando mi primer commit"
Muestra el historial de cambios guardados en commit con su ID
git log
Muestra los cambios especificos utilizando el ID
git show "ID del commit"
Conecta en remotamente el proyecto
git remote add origin https://github.com/Yoel-Aliaga/codigo-10.git
Para ver a que url esta vinculado nuestro proyecto
git remote -v
Cambiar de url
git remote set-url origin  url
Sube los archivos a GitHub
git push origin main


