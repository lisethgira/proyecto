// Función para obtener los usuarios desde una API y mostrarlos en el dashboard
function obtenerUsuarios() {
	fetch('https://api.example.com/usuarios')
		.then(response => response.json())
		.then(data => {
			// Crear una tabla HTML con los datos de los usuarios
			let tabla = '<table><thead><tr><th>ID</th><th>Nombre</th><th>Email</th></tr></thead><tbody>';
			data.forEach(usuario => {
				tabla += `<tr><td>${usuario.id}</td><td>${usuario.nombre}</td><td>${usuario.email}</td></tr>`;
			});
			tabla += '</tbody></table>';
			// Agregar la tabla al contenedor principal del dashboard
			document.querySelector('main').innerHTML = tabla;
		})
		.catch(error => {
			console.error('Error al obtener los usuarios:', error);
		});
}

// Llamar a la función obtenerUsuarios al cargar la página
window.addEventListener('load', obtenerUsuarios);