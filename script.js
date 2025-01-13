function handleForm(event) {
    event.preventDefault(); // Previene il ricaricamento della pagina

    // Ottieni i valori dal modulo
    const formData = {
        name: document.getElementById("name").value,
        date: document.getElementById("date").value,
        absence_type: document.querySelector('input[name="absence_type"]:checked').value,
        notes: document.getElementById("notes").value,
        commitment: Array.from(document.querySelectorAll('input[name="commitment"]:checked'))
            .map(cb => cb.value)
            .join(", ")
    };

    // Invia l'email tramite EmailJS
    emailjs
        .send("service_98mhb0r", "template_cmrfyxl", formData)
        .then(
            function (response) {
                alert("Modulo inviato con successo!");
                console.log("SUCCESS", response);
            },
            function (error) {
                alert("Errore durante l'invio del modulo.");
                console.log("FAILED", error);
            }
        );
}
