//  Ejemplo de url completa enviado parametros de query (tema) language (idioma) pageSize (resultados devueltos) y apikey
//  https://newsapi.org/v2/everything?q=bitcoin&language=es&pageSize=1&apiKey=43d6bcd584224624a9dafcb6d46465d9

let apiKey = '43d6bcd584224624a9dafcb6d46465d9';
const LANGUAGE = 'es';


document.addEventListener('DOMContentLoaded', () => {
    loadNews('israel', 2);
    // Por ejemplo, aqui estamos llamando a loadNews() para que nos de 2 resultados de noticias sobre Israel
    // Podemos hacer diferentes llamadas pasando diferentes parametros a la funcion, que será la unica encargada de llamar a la api
});


function loadNews(query, pageSize) {

    const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&apiKey=${apiKey}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error in response');
            }

            return response.json();

        })

        .then(data => {

            let arrayArticles = (data.articles);

            for (let index = 0; index < arrayArticles.length; index++) {

                console.log(arrayArticles[index].title);
                console.log(arrayArticles[index].url);
                console.log(arrayArticles[index].urlToImage);

            }


        })
}