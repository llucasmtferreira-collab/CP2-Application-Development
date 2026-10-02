const divAtores = document.querySelector(".atores");
const campoBusca = document.querySelector("#campo-busca");
const quantidade = document.querySelector("#quantidade");

function mostrarAtores(lista) {
    divAtores.innerHTML = "";
    quantidade.innerText = lista.length + " resultado(s)";

    lista.forEach((ator) => {
        divAtores.innerHTML += `
            <div class="card">
                <img src="${ator.foto}" alt="Foto de ${ator.nome}">
                <h2>${ator.nome}</h2>
                <p><strong>País:</strong> ${ator.pais}</p>
                <p><strong>Nascimento:</strong> ${ator.nascimento}</p>
            </div>
        `;
    });
}

function filtrarAtores() {
    const busca = campoBusca.value.toLowerCase();

    const resultado = atores.filter((ator) =>
        ator.nome.toLowerCase().includes(busca)
    );

    mostrarAtores(resultado);
}

mostrarAtores(atores);
