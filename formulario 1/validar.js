function validarfor() {
    const nombre = document.getElementById('Nombre').value.trim();
    const apellido = document.getElementById('Apellido').value.trim();
    const DNI = document.getElementById('DNI').value.trim();
    const correo_electronico = document.getElementById('CorreoElectronico').value.trim();

    if (nombre === '') {
        alert("Ingrese su nombre");
        return false;
    } 
    else if (apellido === '') {
        alert('Ingrese su apellido');
        return false;
    }
    else if (isNaN(DNI) || DNI.length !== 8) {
        alert('Por favor ingrese un DNI válido');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo_electronico)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    return true;
}