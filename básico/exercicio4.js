/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


//---------------------------------------------------------------------------


function listCatergory(booksObject, authorToListBooks)
{
    let totalCategories = booksObject.length
    let messageCategories = new String
    let messageToReturn = new String
    let authorList = new Array
    let booksFromAuthor = new Array

    for(category of booksObject)
    {   
        let totalOfBooks = new Array

        for(book of category.books)
        { 
            totalOfBooks.push(book)
            if(!authorList.includes(book.author))
            {
                authorList.push(book.author)
            }
            if(book.author == authorToListBooks)
            {   
                booksFromAuthor.push("\n" + book.title)
            }
        }
        messageCategories +=`A Categoria ${category.category} tem ${totalOfBooks.length} livros.\n` 

    }
    messageToReturn = `\nTotal de ${totalCategories} Categorias\n\n${messageCategories}\n\nTem ${authorList.length} Autores\n\n${authorToListBooks} tem os seguintes livros cadastrados:
    ${booksFromAuthor}`

    return messageToReturn
}


console.log(listCatergory(booksByCategory, "Augusto Cury"))