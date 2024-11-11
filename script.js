// Mostrar y ocultar el contenedor de notificaciones :u
function toggleNotifications() {
    const notificationsContainer = document.getElementById("notificationsContainer");
    notificationsContainer.style.display = notificationsContainer.style.display === "none" ? "block" : "none";
}

// Modo claro y oscuro
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    
    // Boton 
    const darkModeButton = document.querySelector('.dark-mode-toggle');
    if (document.body.classList.contains("dark-mode")) {
        darkModeButton.textContent = "☀️"; 
    } else {
        darkModeButton.textContent = "🌙"; 
    }
}

// Notificación
function addNotification(message) {
    const notificationList = document.getElementById("notificationList");
    const listItem = document.createElement("li");
    listItem.classList.add("notification-item");
    listItem.innerHTML = `
        <span>${message}</span>
        <button class="delete-btn" onclick="deleteNotification(this)">Eliminar</button>
    `;
    
    notificationList.appendChild(listItem);
}

// Elimina una notificacion 
function deleteNotification(button) {
    button.parentElement.remove();
}

// Agregar una notificación de prueba :v
addNotification("Nuevo mensaje de inventario");
addNotification("Producto agotado");
