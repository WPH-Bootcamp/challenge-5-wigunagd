type Book = {
    title: string;
    author: string;
    year: number;
}

let arrBooks: Book[] = [];

const addBook = (addTitle: string, addAuthor: string, addYear: number): void => {
    const addNewBook: Book = {
        title: addTitle, author: addAuthor, year: addYear
    };

    arrBooks.push(addNewBook);
    console.log(`Book added: "${addTitle}" by ${addAuthor} (${addYear})`);
};

const listBooks = (): void => {
    console.log("All Books:");
    console.log("--------------------");
    arrBooks.forEach((arrBooks) => {
        console.log(`- ${arrBooks.title} by ${arrBooks.author} (${arrBooks.year})`);
    });
    console.log("--------------------");
    console.log();
};

const searchBook = (searchTitle?: string): void => {
    if (!searchTitle) {
        console.log("Please provide a title to search.");
        console.log();
        listBooks();
    } else {
        const searchResults = arrBooks.filter(
            (book) => book.title.includes(searchTitle)
        );

        if (searchResults.length === 0) {
            console.log(`No books found with title containing "${searchTitle}".`);
        } else {
            console.log(`Search Results for "${searchTitle}":`);
            searchResults.forEach((book) => {
                console.log(`- ${book.title} by ${book.author} (${book.year})`);
            });
        }
    }
};

// Example Input

// Adding some books
addBook('The Great Gatsby', 'F. Scott Fitzgerald', 1925);
addBook('1984', 'George Orwell', 1949);

// Displaying all books
listBooks();

// Searching for a book by title
searchBook('1984');
console.log();
searchBook('the great gatsby');
console.log();
// Searching with empty title
searchBook();


// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
