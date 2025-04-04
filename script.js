const livros = {
    "Gênesis": 50, "Êxodo": 40, "Levítico": 27, "Números": 36, "Deuteronômio": 34,
    "Josué": 24, "Juízes": 21, "Rute": 4, "1 Samuel": 31, "2 Samuel": 24,
    "1 Reis": 22, "2 Reis": 25, "1 Crônicas": 29, "2 Crônicas": 36,
    "Esdras": 10, "Neemias": 13, "Ester": 10, "Jó": 42, "Salmos": 150,
    "Provérbios": 31, "Eclesiastes": 12, "Cantares": 8, "Isaías": 66,
    "Jeremias": 52, "Lamentações": 5, "Ezequiel": 48, "Daniel": 12,
    "Oseias": 14, "Joel": 3, "Amós": 9, "Obadias": 1, "Jonas": 4,
    "Miquéias": 7, "Naum": 3, "Habacuque": 3, "Sofonias": 3,
    "Ageu": 2, "Zacarias": 14, "Malaquias": 4,
    "Mateus": 28, "Marcos": 16, "Lucas": 24, "João": 21,
    "Atos": 28, "Romanos": 16, "1 Coríntios": 16, "2 Coríntios": 13,
    "Gálatas": 6, "Efésios": 6, "Filipenses": 4, "Colossenses": 4,
    "1 Tessalonicenses": 5, "2 Tessalonicenses": 3, "1 Timóteo": 6, "2 Timóteo": 4,
    "Tito": 3, "Filemom": 1, "Hebreus": 13, "Tiago": 5,
    "1 Pedro": 5, "2 Pedro": 3, "1 João": 5, "2 João": 1,
    "3 João": 1, "Judas": 1, "Apocalipse": 22
  };
  
  
  const livroSelect = document.getElementById('livro');
  const capituloSelect = document.getElementById('capitulo');
  const versiculoSelect = document.getElementById('versiculo');
  const textoDiv = document.getElementById('texto');
  
  // Preenche os livros
  for (let livro in livros) {
    let option = new Option(livro, livro);
    livroSelect.add(option);
  }
  
  // Atualiza capítulos ao escolher livro
  livroSelect.addEventListener('change', () => {
    capituloSelect.innerHTML = '';
    const numCapitulos = livros[livroSelect.value];
    for (let i = 1; i <= numCapitulos; i++) {
      capituloSelect.add(new Option(i, i));
    }
    capituloSelect.dispatchEvent(new Event('change'));
  });
  
  // Atualiza versículos ao escolher capítulo
  capituloSelect.addEventListener('change', () => {
    versiculoSelect.innerHTML = '';
    // Como a API não fornece o número de versículos, limitamos a 50 por padrão
    const versiculosPadrao = 50;
    for (let i = 1; i <= versiculosPadrao; i++) {
      versiculoSelect.add(new Option(i, i));
    }
  });
  
  // Ler o versículo usando Bible-API
  async function lerVersiculo() {
    const livro = livroSelect.value;
    const capitulo = capituloSelect.value;
    const versiculo = versiculoSelect.value;
    const url = `https://bible-api.com/${livro}+${capitulo}:${versiculo}?translation=almeida`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      if (data.text) {
        textoDiv.innerText = `${data.reference}: ${data.text}`;
      } else {
        textoDiv.innerText = "Versículo não encontrado.";
      }
    } catch (error) {
      textoDiv.innerText = "Erro ao buscar o versículo.";
      console.error(error);
    }
  }
  
  // Inicializa ao carregar
  livroSelect.dispatchEvent(new Event('change'));
  

