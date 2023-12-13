document.addEventListener('DOMContentLoaded', function () {
    const botao = document.getElementById('btn-gerar');
    const cardContainer = document.getElementById('frases')

    async function getKanyeFrases() {
        try {
            const response = await fetch(`https://api.kanye.rest/`);
            const data = await response.json();
            return data.quote;
        } catch (error) {
            console.error('Erro ao obter citação:', error);
            return null;
        }
    }

    async function addCardFrase() {
        const quote = await getKanyeFrases();
    
        if (quote) {
            
            const cardDiv = document.createElement('div');
            cardDiv.className = 'card col-md-3 m-3';
            cardDiv.style.width = '18rem';
            cardDiv.style.height = '16rem';
            
            const cardBodyDiv = document.createElement('div');
            cardBodyDiv.className = 'card-body';
            
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = quote;
            
            const deleteButton = document.createElement('button');
            deleteButton.className = 'btn btn-danger';
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                deletarCard(deleteButton);
            };
            
            cardBodyDiv.appendChild(cardText);
            cardBodyDiv.appendChild(deleteButton);
            
            cardDiv.appendChild(cardBodyDiv);
            
            cardContainer.appendChild(cardDiv);
            
        }
    }
    
    function deletarCard(button) {
        const card = button.closest(`.card`);
        card.remove();
    }
    
    botao.addEventListener('click', addCardFrase);

})
