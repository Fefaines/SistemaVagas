const vagas = [];

function listarVagas() {
  if (vagas.length > 0) {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice) {
      //1.nome, (x candidatos)
      textoFinal += indice + 1 + ". ";
      textoFinal += vaga.nome;
      textoFinal += " (" + vaga.candidatos.length + " candidatos)\n";
      length;
      return textoFinal;
    }, "");
    alert(vagasEmTexto);
  } else {
    alert("Não há vagas para mostrar!");
  }
}

function novaVaga() {
  const nome = prompt("informe um nome para vaga: ");
  const descricao = prompt("Informe uma descrição para a vaga");
  const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga");

  const confirmacão = confirm(
    "Deseja criar uma nova vaga com essas informações?\n" +
      "Nome da vaga: " +
      nome +
      "\nDescrição: " +
      descricao +
      "\nData Limite: " +
      dataLimite
  );

  if (confirmacão) {
    const novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
    alert("Vaga criada com sucesso!");
  }
}
function exibirVaga() {
  const indice = parseFloat(
    prompt("Informe o índice da vaga que deseja exibir:")
  );

  if (indice > vagas.length || isNaN(indice)) {
    alert("Não há vagas com o indice informado.");
  } else {
    const vaga = vagas[indice - 1];
    const candidatosEmTexto = vaga.candidatos.reduce(
      (textoFinal, candidato) => textoFinal + "\n - " + candidato,
      ""
    );

    alert(
      "\nVaga nº " +
        indice + // eu quero que ele tire menos um do número colocado no prompt
        "\nNome da vaga: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData limite: " +
        vaga.dataLimite +
        "\nQuantidade de candidatos: " +
        vaga.candidatos.length +
        "\nCandidatos inscritos:" +
        candidatosEmTexto
    );
  }
}

function increverCandidato() {
  const candidato = prompt("Informe o nome do candidato(a)");
  const indice = parseFloat(
    prompt(
      "Informe o índice da vaga para a qual o(a) candidato deseja se inscrever"
    )
  );
  const vaga = vagas[indice - 1];
  if (indice > vagas.length || isNaN(indice)) {
    alert("Não há vagas com o indice informado");
  } else {
    const confirmacao = confirm(
      "Deseja inscrever o candidato " +
        candidato +
        " na vaga " +
        indice +
        "?\n" +
        "Nome da Vaga: " +
        vaga.nome +
        "\nDescrição " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.dataLimite
    );
    if (confirmacao) {
      vaga.candidatos.push(candidato);
      alert("Inscrição realizada com sucesso!");
    }
  }
}

function excluirVaga() {
  const indice = prompt("Informe o índice da vaga que deseja excluir");
  if (indice > vagas.length || isNaN(indice)) {
    alert("Não há vagas com o índice informado");
  } else {
    const vaga = vagas[indice - 1];

    const confirmacao = confirm(
      "Tem certeza que deseja excluir a vaga " +
        indice +
        "?\n" +
        "Nome: " +
        vaga.nome +
        "\nDescrição: " +
        vaga.descricao +
        "\nData Limite: " +
        vaga.dataLimite
    );

    if (confirmacao) {
      vagas.splice(indice - 1, 1);
      alert("Vaga excluída com sucesso!");
    }
  }
}

function exibirMenu() {
  const opcao = prompt(
    "Cadastro de Vagas de Emprego:\n" +
      "\nEscolha uma das opções abaixo: " +
      "\n1. Listar vagas disponíveis" +
      "\n2. Criar nova vaga" +
      "\n3. Vizualizar uma vaga" +
      "\n4. Inscrever um candidato" +
      "\n5. Excluir uma vaga" +
      "\n6. Sair"
  );
  return opcao;
}

function executar() {
  let opcao = "";

  do {
    opcao = exibirMenu();

    switch (opcao) {
      case "1":
        listarVagas();
        break;
      case "2":
        novaVaga();
        break;
      case "3":
        exibirVaga();
        break;
      case "4":
        increverCandidato();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Encerrando...");
        break;
      default:
        alert("Digite uma opção válida!");
    }
  } while (opcao !== "6");
}

executar();
