// Add interactivity to the "Crear cuenta" text
document.querySelector('.create-account').addEventListener('click', () => {
    alert('Redirigiendo a la página de registro...');
  });
  
  // Add focus animations for input fields
  const inputFields = document.querySelectorAll('.input-field');
  inputFields.forEach((field) => {
    field.addEventListener('focus', () => {
      field.style.borderColor = '#007bff';
      field.style.transition = 'border-color 0.3s';
    });
    field.addEventListener('blur', () => {
      field.style.borderColor = '#ccc';
    });
  });
  