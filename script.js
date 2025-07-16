document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = this.nome.value.trim();
  const email = this.email.value.trim();
  const mensagem = this.mensagem.value.trim();
  const erro = document.getElementById('msgErro');
  const sucesso = document.getElementById('msgSucesso');
  erro.textContent = '';
  sucesso.textContent = '';

  if (!nome || !email || !mensagem) {
    return erro.textContent = 'Por favor, preencha todos os campos.';
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return erro.textContent = 'Informe um e‑mail válido.';
  }
  sucesso.textContent = 'Mensagem enviada com sucesso! 😊';
  this.reset();
});
