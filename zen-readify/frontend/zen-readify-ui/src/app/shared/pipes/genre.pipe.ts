import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:'filterByGenre',
    pure:true
})
export class FilterByGenrePipe implements  PipeTransform{
    transform(books: any, selectedGenre:string) {
        
        if(selectedGenre ==='All'){
            return books;
        }
        
        const grouped =  Object.fromEntries(books);
        
        for(const key in grouped){
             grouped[key] = grouped[key].filter((book:any)=> book.genre === selectedGenre)
        }
        
        return Object.entries(grouped);
    }
  
    
}