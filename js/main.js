// Dados do protocolo
const protocolInfo = {
    number: 1010,
    name: 'Nome/Razão Social',
    cpf: '123.456.789-00',
    address: 'Endereço',
    purpose: 'Finalidade',
    cnpj: '12.345.678/0001-00',
    date: 'Data',
    type: 'Tipo'
  };
  
  // Preencher os dados no HTML
  document.getElementById('name').textContent = protocolInfo.name;
  document.getElementById('cpf').textContent = protocolInfo.cpf;
  document.getElementById('address').textContent = protocolInfo.address;
  document.getElementById('purpose').textContent = protocolInfo.purpose;
  document.getElementById('cnpj').textContent = protocolInfo.cnpj;
  document.getElementById('date').textContent = protocolInfo.date;
  document.getElementById('type').textContent = protocolInfo.type;
  
  // Adicionar evento de clique no botão
  document.getElementById('create-report').addEventListener('click', () => {
    alert('Relatório criado com sucesso!');
  });

  //crie uma função que some dois numeros
  function soma(n1, n2) {
      return n1 + n2;
  }

  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {   
      alert("Por favor, insira valores númericos!");    
  } else {
    const resultado = soma(num1, num2);
      document.querySelector("#resultado").innerHTML= `O resultado da soma é ${resultado}`;
  }<