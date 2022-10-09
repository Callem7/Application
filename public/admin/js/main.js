//Faz um pedidio ao Servidor
async function getPosts() { //Function é uma função assíncrona
    return await fetch('http:/localhost:3000/posts') //função sincrona
        .then((response) => response.json()) //Converte para o formato json
        .then((data) => data); //Retorna os dados convertidos
}

document.addEventListener('DOMContentLoaded', async function() {
    let posts = await getPosts(); //array
    let articles = document.querySelector('.articles-list tbody'); //Vai buscar a tabela
    articles.innerHTML = ''; 
    posts.forEach((post) => { 
        let postHTML = `
        <tr>
            <td>${post.id}</td>
            <td>${post.titulo}</td>
            <td>${post.data}</td>
            <td>${post.pais}</td>
            <td><button class="btn btn-link p-0 text-decoration-none">Editar</button></td>
            <td><button class="btn btn-link p-0 text-decoration-none">X</button></td>
        </tr>
        `;
        //Coloca postHTML dentro da tabela
        articles.insertAdjacentHTML('beforeend', postHTML);
    }) 
})