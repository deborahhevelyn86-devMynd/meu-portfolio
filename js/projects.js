// Função para abrir modal
function openModal(title, content) {
  // Cria container do modal
  const modal = document.createElement("div");
  modal.id = "custom-modal";
  modal.className = "fixed inset-0 z-50 flex items-center justify-center bg-black/70";

  modal.innerHTML = `
    <div class="relative bg-white rounded-xl p-6 max-w-2xl w-full shadow-lg text-gray-900">
      <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-800" onclick="closeModal()">✖</button>
      <h2 class="text-2xl font-bold mb-4">${title}</h2>
      <div>${content}</div>
    </div>
  `;

  document.body.appendChild(modal);
}

// Função para fechar modal
function closeModal() {
  const modal = document.getElementById("custom-modal");
  if (modal) {
    modal.remove();
  }
}

// =========================
// Projetos
// =========================

// Jogo de Adivinhação
function openGameModal() {
  const content = `
    <p class="mb-4">Tente adivinhar o número entre 1 e 100!</p>
    <input id="guess" type="number" class="border px-3 py-2 rounded w-full mb-4" placeholder="Digite um número">
    <button onclick="checkGuess()" class="px-4 py-2 bg-orange-500 text-white rounded">Testar</button>
    <p id="game-result" class="mt-4 text-sm"></p>
  `;
  openModal("🎯 Jogo de Adivinhação", content);
}

let randomNumber = Math.floor(Math.random() * 100) + 1;
function checkGuess() {
  const guess = parseInt(document.getElementById("guess").value);
  const result = document.getElementById("game-result");
  if (guess === randomNumber) {
    result.textContent = "🎉 Parabéns! Você acertou!";
  } else if (guess < randomNumber) {
    result.textContent = "🔽 O número é maior!";
  } else {
    result.textContent = "🔼 O número é menor!";
  }
}

// Calculadora
function openCalculatorModal() {
  const content = `
    <input id="num1" type="number" class="border px-3 py-2 rounded w-full mb-2" placeholder="Número 1">
    <input id="num2" type="number" class="border px-3 py-2 rounded w-full mb-2" placeholder="Número 2">
    <button onclick="calculate()" class="px-4 py-2 bg-orange-500 text-white rounded">Calcular</button>
    <p id="calc-result" class="mt-4 text-sm"></p>
  `;
  openModal("📊 Calculadora Inteligente", content);
}

function calculate() {
  const n1 = parseFloat(document.getElementById("num1").value);
  const n2 = parseFloat(document.getElementById("num2").value);
  document.getElementById("calc-result").textContent = `Resultado: ${n1 + n2}`;
}

// Verificador Par/Ímpar
function openParImparModal() {
  const content = `
    <input id="num-parimpar" type="number" class="border px-3 py-2 rounded w-full mb-2" placeholder="Digite um número">
    <button onclick="checkParImpar()" class="px-4 py-2 bg-orange-500 text-white rounded">Verificar</button>
    <p id="parimpar-result" class="mt-4 text-sm"></p>
  `;
  openModal("🔍 Verificador Par/Ímpar", content);
}

function checkParImpar() {
  const num = parseInt(document.getElementById("num-parimpar").value);
  document.getElementById("parimpar-result").textContent =
    num % 2 === 0 ? "✅ É PAR" : "⚡ É ÍMPAR";
}
