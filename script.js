function analisarSolo() {
    const ph = parseFloat(document.getElementById('ph').value);
    const mo = parseFloat(document.getElementById('organica').value);
    const resDiv = document.getElementById('resultado');
    const diagP = document.getElementById('diagnostico');
    const dicasDiv = document.getElementById('dicas');

    if (isNaN(ph) || isNaN(mo)) {
        alert("Por favor, preencha todos os campos!");
        return;
    }

    resDiv.classList.remove('hidden');
    let mensagem = "";
    let dicas = "<strong>Recomendações Sustentáveis:</strong><ul>";

    // Lógica simples de diagnóstico
    if (ph >= 5.5 && ph <= 6.5) {
        mensagem = "✅ Solo com pH ideal para a maioria das culturas!";
        dicas += "<li>Mantenha o plantio direto para preservar a estrutura.</li>";
    } else {
        mensagem = "⚠️ Atenção: pH fora da faixa ideal (5.5 - 6.5).";
        dicas += "<li>Consulte um engenheiro agrônomo para calagem ou gessagem.</li>";
    }

    if (mo < 2.5) {
        mensagem += " O nível de matéria orgânica está baixo.";
        dicas += "<li>Use adubação verde (leguminosas).</li><li>Evite o revolvimento do solo.</li>";
    } else {
        mensagem += " Ótimo nível de matéria orgânica!";
        dicas += "<