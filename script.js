document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-contato");
  const msgStatus = document.getElementById("msg-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        msgStatus.textContent = "Por favor, preencha todos os campos.";
        msgStatus.style.color = "#c0392b";
        return;
      }

      // Simulação de envio
      msgStatus.textContent = "Mensagem enviada com sucesso!";
      msgStatus.style.color = "#27ae60";
      form.reset();
    });
  }
});