export const groupBooksByCategory = (books: any[] = []) =>{
  const groups = books.reduce((acc , book)=>{
        const key = book.category;
        if(!acc[key]){
            acc[key] = [];
        }

        acc[key].push(book);

        return acc;
  },{});

  return Object.entries(groups);
}