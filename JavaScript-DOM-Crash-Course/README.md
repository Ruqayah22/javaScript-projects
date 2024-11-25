# JavaScript DOM Crash Course

- Traversy Media youtube channel.
- [Part 1](https://www.youtube.com/watch?v=0ik6X4DJKCc&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=3)

**_ dom -> document object model _**

> dom actually is so it stands for document object model
> and it's basically a structured representation
> of your html document okay it can be thought of
> as a tree of nodes or elements created by the
> browser javascript can be used to manipulate
> the dom and its elements the dom is object
> oriented meaning that each node has its own
> properties and methods that we can go and we
> can change and we can add we can remove things
> so we can manipulate at basically everything on
> the page using javascript.

---

## JavaScript HTML DOM

![DOM](https://www.w3schools.com/js/pic_htmltree.gif)

<!-- ![dom](./pic_htmltree.gif) // another way to add image the the readme file -->

> seen diagrams like this around the web now the browser gives us a window object which represents the browser itself it's the top level object and then we have a root element inside the document okay so well in the window we have the document object basically the the core of the dom and then we have a root element which is the html tag or the html element or node whatever you want to call it and then inside that we have children like uh head and body tags okay our head and body elements nodes and then those have their own children so we have a title for inside the head we have titles we have things like meta tags in the body we have things like h1s and a tags and all kinds of stuff and then those tags those elements they have text nodes so for instance we may have an h1 with the text of my header that's also considered a node we also have attributes okay connected to elements for instance we have an href attribute on an a tag or an a element so this is this is the dom okay all of this stuff together looked at kind of as a a tree like this is the dom.

`console.dir(document);`

> we're going to pass in the document object okay so what this is going to do is it's going to show us all of the different properties and methods attached to the the document object

`console.log(document.all);`

> is an array or an html collection of everything that is in the dom

### the differences between:

```
.textContent
.innerText

```

> the differences between inner text and text content is one of them pays attention to the styling

```
 <h1 id="header-title">Item Lister <span style="display: none;">123</span></h1>

console.log(headerTitle.textContent);
console.log(headerTitle.innerText);

```

> so if we go into our h1 here and we put in a span and we'll just say i don't know one two three and we'll save actually if this is going to overwrite that so let's just uh comment those out but we get item lister one two three okay so let's go ahead and console.log header title dot uh text content all right so we get itemLister123 now if i go to this span and i add a style to it of display none okay in the daw and in the page here it's going to disappear it's going to go away now text content is still showing the one two three it's it's it's disregarding that span even though it's set to display none it still shows it here but if we were to change this to inner text and save you'll see that the one two three is not there okay so it actually pays attention to the styling so that's one of the biggest differences between the two um but you can use them for the most part pretty interchangeably.

`.innerHTML`

> puts the html inside of that that dom element. didn't change the element but put's it inside of it.

`header.style.borderBottom = 'solid 3px #000'`

> changing the styles with style dot whatever the css property

**query selector** -> this works pretty much just like jquery okay the only big difference is it's it only work you're only you'll use it only for one item.

`document.querySelector('')`

> we can use anything we want in here so we can use tags you could grab a list item you could grab a class okay so you could say dot header you can use any css selector just like you could with **jquery just replace the jquery $ like that with documents document.querySelector()**

```
var input = document.querySelector('input');
input.value = "hello world";

var submit = document.querySelector('input[type="submit"]');
submit.value='SEND';

```

> now even though there's two inputs on the page because this this button this is actually an input as well it only grabbed the first one okay so it's going to grab the first one by default now with query selector we can use any css selector so what i'm going to do now is i'm going to say var submit and let's set this to document dot query selector and instead of just input let's use the input and then brackets and we can say the type equals submit okay just like we could do in css this should actually be in quotes though all right so if we do that and then we say submit dot value and let's see we'll change it to send and save and now you can see we've actually changed the button to send.

### note

> so you can see you can select anything you want and you can do whatever you want with it with JavaScript you don't need jQuery I know I sound very anti jQuery I just think that like I said the analogy that I like is is using a sledgehammer to kill a mosquito you don't need it it'll work but you don't need it and it adds that extra it adds that extra file to your to your page and slows just slows you down that much now don't get me wrong there's there's a lot of really nice jQuery plugins for things like you know hardcore animation like when you scroll down a page and you want certain things to pop out at certain spots I mean you can do that kind of stuff in JavaScript but there are really nice jQuery plugins that will save you a lot of time and it's a lot less code so I'm not saying don't use jQuery for anything I'm just saying for simple Dom manipulation there's really no need for it.

### creating Dom elements from JavaScript and inserting them

create element
`document.createElement('div')`

### event handlers

`console.log(e.target);`

> it gives us the actual element that was clicked okay or whatever it or not just clicked if this was like a key down on an input a key down event it would give us the input.

`console.log(e.type);`

> tell us whatever kind whatever type of event that it is.

`console.log(e.clientX);`

> the position of the mouse. get the position on the x axis when it's clicked. so the client X is actually the position from the with the browser window.

`console.log(e.clientY);`

> client Y that's gonna be from the wind from the top down ok .

```
    console.log(e.offsetX);
    console.log(e.offsetY);
```

> get the most position from the actual element that you're inside of then you want to use offset X and offset Y.

```
console.log(e.altKey);
console.log(e.ctrlKey);
console.log(e.shiftKey);
```
> we can test to see if when you click it if you're holding down the Alt key or the shift key or the control key.

```
box.addEventListener("mouseenter", runEvent);
box.addEventListener("mouseleave", runEvent);

box.addEventListener("mouseover", runEvent);
box.addEventListener("mouseout", runEvent);

```
> then you'll see that when I enter both of those mouse over and mouse enter fire when I leave both mouse out and mouse leave fire off so what the hell's the difference they're doing the same thing well the difference is if this element has something in it like let's put in will put in an h3 and we'll just say hello all right so if we enter okay both are gonna fire off most over mouse enter now if I go when I go hover over that hello that that child element you'll see that hold on a second this is actually this is getting too confusing let me just let me comment out most leave and mouse out so we're only dealing with the enters so we go in the box both fire off if I go over the hello only the mouse over goes fires off okay the most enter is only going to be for that for the element itself but the over will be for any inner elements okay does that make sense you'll see that it keeps firing off as I go over this but the mouse enter will only be going in the actual the you know the the parent element alright and it's the same thing with most leave and mouse out so if I go ahead and comment those out and we'll do the same thing if we leave will get both but if we go on this one and leave we just get most out not most leave alright I hope that makes sense.

```
itemInput.addEventListener("keydown", runEvent);
itemInput.addEventListener("keyup", runEvent);

```

> key up is gonna run when you release the key. I'm gonna push down and hold a key you get key down if I let go there's key up 

```
itemInput.addEventListener("focus", runEvent);
itemInput.addEventListener("blur", runEvent);

```
> you click in we get focus we click out we get blur. 

`e.preventDefault();`
> click the submit button and notice that nothing's happening actually you can see a blink down there see if I keep clicking it'll blink real quick that's because it's actually submitting to the page okay it's just working like a regular HTML form in order for it not to do that you have to prevent that from happening and the way that you do that is you take this event parameter that's passed in and you call a dot prevent default okay which is a function that's going to stop that from happening. **when we submit a form we have to stop the prevent behavior of the the initial behavior we have to prevent it**

### very important 

[Final Project](https://www.youtube.com/watch?v=i37KVt_IcXw&list=PLillGF-RfqbbnEGy3ROiLWk7JMCuSyQtX&index=6)

``` 
var li = e.target.parentElement;
itemList.removeChild(li);
```

> we want the parent element which is the Li ok doing you know hopefully you can understand that that's why we're using parent element because we're clicking on the button we want the the parent Li and then what we want to do is just remove the child of the item list so the item list is the UL 