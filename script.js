function generateSlug(text) {
    return text
        .toLowerCase()                     // Convertir a minúsculas
        .trim()                            // Eliminar espacios al inicio y final
        .replace(/[^a-z0-9 -]/g, '')      // Eliminar caracteres no válidos
        .replace(/\s+/g, '-')              // Reemplazar espacios por guiones
        .replace(/--+/g, '-')              // Reemplazar múltiples guiones por uno solo
        .replace(/^-|-$/g, '');            // Eliminar guiones al inicio y final
}

document.getElementById('generateSlug').addEventListener('click', () => {
    const inputText = document.getElementById('inputText').value;
    const slug = generateSlug(inputText);
    document.getElementById('slugResult').innerText = slug;
});