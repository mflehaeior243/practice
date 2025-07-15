function mostrarMensaje() {
  const mensaje = document.getElementById("mensaje");
  const boton = document.querySelector("button");
  const body = document.body;

  // Cambiar mensaje
  mensaje.textContent = "¡Has hecho clic y estás aprendiendo GitHub! 🎉";

  // Añadir clase para animar el mensaje
  mensaje.classList.add("animar-mensaje");

  // Cambiar color del botón
  boton.style.backgroundColor = "#e94560";
  boton.style.color = "white";

  // Cambiar fondo con transición
  body.style.transition = "background 0.7s ease";
  body.style.background = "linear-gradient(to bottom right, #e94560, #f9d423)";
  mensaje.textContent = "¡Gracias por visitar mi sitio! 🚀";
}
