function getDados() {
    const url = 'https://127.0.0.1:5000/';
    
    getAPI(url)
    .then(data => {
        const lista = document.getElementById('lista-dados');
        lista.innerHTML = '';
        data.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item.nome;
        lista.appendChild(li);
        });
    });
}
