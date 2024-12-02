# Async JS Crash Course - Callbacks, Promises, Async Await

[video](https://www.youtube.com/watch?v=PoRJizFvM7s)

## asynchronous data

- asynchronous data and what that means basically synchronous is when something's going on but you don't want to wait until that thing is done to continue your program you want to continue while it's happening so what's happening asynchronously rather than synchronous programming where something happens and you wait until it's completely finished until you move on to the next.
- asynchronous programming is is very relevant to JavaScript because we're often making requests to servers elsewhere and it can take a couple seconds to get your data back for instance and you might not want your program to stall and wait for that data to come back you want to keep going and and keep doing something so this is where callbacks come.
- in and callbacks were used for a long time until es6 was released or es2015 where promises were introduced to the language and promises give you a more elegant way to handle asynchronous data and then in I think it was es7 async await was introduced which is still dealing with promises just in a different way you're dealing with the response in a way that's a little more elegant and it looks it looks more like synchronous programming rather than using the dot.


`setTimeout(()=> {}, )`
> set timeout is just it takes in a callback function so we could put a function in here and then it takes in a certain amount of time where you want to delay whatever you put in here so I'm going to delay it by a sec so we want 1,000 which is 1,000 milliseconds. 

## promise
> or the most part in my experience you're mostly going to be dealing with promises so for instance when you use the fetch API or Axios or anything that uses promises the Mongoose library for DB for nodejs uses promises you know more and more libraries are using promises now so you're mostly going to be dealing with the response rather than creating them yourselves but you should also know how to create them yourself which is just basically new promise. 

## Async / Await
> now this function has to be labeled async if we want to use await inside of it and await does just that it waits for an a synchronous process or action to complete so what we'll do is we'll call create posts okay.

### Async / Await / Fetch
> it's just a cleaner way of dealing with promises instead of doing the dot then and all hat stuff especially with fetch makes it look even nicer we just have these variables and everything is just one after another there's no dot then or dot you know whatever and it's it's cleaner than callbacks as well so I mean that's pretty much.