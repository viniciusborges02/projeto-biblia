const livros = {
  // Antigo Testamento
  "Gênesis": { cap: 50, testamento: "antigo", api: "Genesis" },
  "Êxodo": { cap: 40, testamento: "antigo", api: "Exodus" },
  "Levítico": { cap: 27, testamento: "antigo", api: "Leviticus" },
  "Números": { cap: 36, testamento: "antigo", api: "Numbers" },
  "Deuteronômio": { cap: 34, testamento: "antigo", api: "Deuteronomy" },
  "Josué": { cap: 24, testamento: "antigo", api: "Joshua" },
  "Juízes": { cap: 21, testamento: "antigo", api: "Judges" },
  "Rute": { cap: 4, testamento: "antigo", api: "Ruth" },
  "1 Samuel": { cap: 31, testamento: "antigo", api: "1 Samuel" },
  "2 Samuel": { cap: 24, testamento: "antigo", api: "2 Samuel" },
  "1 Reis": { cap: 22, testamento: "antigo", api: "1 Kings" },
  "2 Reis": { cap: 25, testamento: "antigo", api: "2 Kings" },
  "1 Crônicas": { cap: 29, testamento: "antigo", api: "1 Chronicles" },
  "2 Crônicas": { cap: 36, testamento: "antigo", api: "2 Chronicles" },
  "Esdras": { cap: 10, testamento: "antigo", api: "Ezra" },
  "Neemias": { cap: 13, testamento: "antigo", api: "Nehemiah" },
  "Ester": { cap: 10, testamento: "antigo", api: "Esther" },
  "Jó": { cap: 42, testamento: "antigo", api: "Job" },
  "Salmos": { cap: 150, testamento: "antigo", api: "Psalms" },
  "Provérbios": { cap: 31, testamento: "antigo", api: "Proverbs" },
  "Eclesiastes": { cap: 12, testamento: "antigo", api: "Ecclesiastes" },
  "Cânticos": { cap: 8, testamento: "antigo", api: "Song of Solomon" },
  "Isaías": { cap: 66, testamento: "antigo", api: "Isaiah" },
  "Jeremias": { cap: 52, testamento: "antigo", api: "Jeremiah" },
  "Lamentações": { cap: 5, testamento: "antigo", api: "Lamentations" },
  "Ezequiel": { cap: 48, testamento: "antigo", api: "Ezekiel" },
  "Daniel": { cap: 12, testamento: "antigo", api: "Daniel" },
  "Oseias": { cap: 14, testamento: "antigo", api: "Hosea" },
  "Joel": { cap: 3, testamento: "antigo", api: "Joel" },
  "Amós": { cap: 9, testamento: "antigo", api: "Amos" },
  "Obadias": { cap: 1, testamento: "antigo", api: "Obadiah" },
  "Jonas": { cap: 4, testamento: "antigo", api: "Jonah" },
  "Miquéias": { cap: 7, testamento: "antigo", api: "Micah" },
  "Naum": { cap: 3, testamento: "antigo", api: "Nahum" },
  "Habacuque": { cap: 3, testamento: "antigo", api: "Habakkuk" },
  "Sofonias": { cap: 3, testamento: "antigo", api: "Zephaniah" },
  "Ageu": { cap: 2, testamento: "antigo", api: "Haggai" },
  "Zacarias": { cap: 14, testamento: "antigo", api: "Zechariah" },
  "Malaquias": { cap: 4, testamento: "antigo", api: "Malachi" },

  // Novo Testamento
  "Mateus": { cap: 28, testamento: "novo", api: "Matthew" },
  "Marcos": { cap: 16, testamento: "novo", api: "Mark" },
  "Lucas": { cap: 24, testamento: "novo", api: "Luke" },
  "João": { cap: 21, testamento: "novo", api: "John" },
  "Atos": { cap: 28, testamento: "novo", api: "Acts" },
  "Romanos": { cap: 16, testamento: "novo", api: "Romans" },
  "1 Coríntios": { cap: 16, testamento: "novo", api: "1 Corinthians" },
  "2 Coríntios": { cap: 13, testamento: "novo", api: "2 Corinthians" },
  "Gálatas": { cap: 6, testamento: "novo", api: "Galatians" },
  "Efésios": { cap: 6, testamento: "novo", api: "Ephesians" },
  "Filipenses": { cap: 4, testamento: "novo", api: "Philippians" },
  "Colossenses": { cap: 4, testamento: "novo", api: "Colossians" },
  "1 Tessalonicenses": { cap: 5, testamento: "novo", api: "1 Thessalonians" },
  "2 Tessalonicenses": { cap: 3, testamento: "novo", api: "2 Thessalonians" },
  "1 Timóteo": { cap: 6, testamento: "novo", api: "1 Timothy" },
  "2 Timóteo": { cap: 4, testamento: "novo", api: "2 Timothy" },
  "Tito": { cap: 3, testamento: "novo", api: "Titus" },
  "Filemom": { cap: 1, testamento: "novo", api: "Philemon" },
  "Hebreus": { cap: 13, testamento: "novo", api: "Hebrews" },
  "Tiago": { cap: 5, testamento: "novo", api: "James" },
  "1 Pedro": { cap: 5, testamento: "novo", api: "1 Peter" },
  "2 Pedro": { cap: 3, testamento: "novo", api: "2 Peter" },
  "1 João": { cap: 5, testamento: "novo", api: "1 John" },
  "2 João": { cap: 1, testamento: "novo", api: "2 John" },
  "3 João": { cap: 1, testamento: "novo", api: "3 John" },
  "Judas": { cap: 1, testamento: "novo", api: "Jude" },
  "Apocalipse": { cap: 22, testamento: "novo", api: "Revelation" }
};


const antigoDiv = document.getElementById("antigo");
const novoDiv = document.getElementById("novo");

for (let nome in livros) {
  const btn = document.createElement("button");
  btn.textContent = nome;
  const { cap, api, testamento } = livros[nome];
  btn.addEventListener("click", () => {
    window.location.href = `capitulos.html?livro=${encodeURIComponent(nome)}&capitulos=${cap}&api=${api}`;
  });
  if (testamento === "antigo") {
    antigoDiv.appendChild(btn);
  } else {
    novoDiv.appendChild(btn);
  }
}

