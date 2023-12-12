document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btn-gerar');
    const cardContainer = document.getElementById('card-frase')

    async function getKanyeFrase() {
        try {
            const response = await fetch('https://api.kanye.rest/');
            const data = await response.json();
            return data.quote;
        } catch (error) {
            console.error('Erro ao obter citação:', error);
            return null;
        }
    }

    async function addCardFrase() {
        const quote = await getKanyeFrase();

        if (quote) {
            const card = `
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">${quote}</p>
                        <button class="btn btn-danger" onclick="deletarCard(this)">Delete</button>
                    </div>
                </div>
            `;
            cardContainer.innerHTML += card;
        }
    }

    function deletarCard(button) {
        const card = button.closest('.card');
        card.remove();
    }


botao.addEventListener('click', addCardFrase);

})
