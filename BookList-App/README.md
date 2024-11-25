# JavaScript BookList App | No Frameworks
## Traversy Media

[BookList](https://www.youtube.com/watch?v=JaMCxVWtW58&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=7)

### Used: 

[bootSwatch](https://bootswatch.com/4/)
- theme called Yeti 
- from download choose (bootstrap.min.css) 
- open it in a new tab and take the URL 
- and put it in the html link 

[font-awesome](https://cdnjs.com/libraries/font-awesome/5.6.3)

### in bootstrap:
- mt -> mean margin top
- text-primary -> mean blue color of the text
- btn-block -> mean only it in the line (line blok)
- display-4 -> is part of a set of display heading utility classes used to create larger, more prominent headings.
    - display-4 Class:
    - It defines the font size and styling for a heading.
    - It is the smallest size in the display heading series, which ranges from display-1 (largest) to display-4 (smallest).

`constructor()` -> inside the class
> class book we want our Constructor which is just a method that runs when we instantiate a book it's going to take in all the fields.
`this. ` 
> then we want to take those those uh whatever's passed in as these parameters and assign it to the property of that object and we do that using this okay the this keyword so this. 
``` 
class UI {
  static displayBooks() {
    
  }
```
> I don't want to have to instantiate the UI class so we're going to make all the methods static so for for instance. 
> In JavaScript, the static keyword is used to define a static method in a class. A static method is one that belongs to the class itself, rather than to any instance of the class. This means: Called on the Class, Not on an Instance. 

`books.forEach((book) => UI.addBookToList(book));`
> we're setting books to that array then We're looping through and then we're just calling a method on that book or I'm sorry yeah calling method and passing that book into it

`JSON.stringify(books)`
> the problem here is like I said local storage is strings right now books is an is an array of objects so the solution to this is just to wrap this books in json. stringify that way it can actually get added.