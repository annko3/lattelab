document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('form');

  form.addEventListener('submit', (e) => {
    e.preventDefault(); 

    const nombre = form.name.value.trim();
    const correo = form.email.value.trim();
    const mensaje = form.message.value.trim();

    
    if (!nombre || !correo || !mensaje) {
      alert('Por favor, completa todos los campos antes de enviar.');
      return;
    }

    
    alert(`¡Gracias por contactarnos, ${nombre}! Te responderemos pronto.`);

    
    form.reset();
  });
});
