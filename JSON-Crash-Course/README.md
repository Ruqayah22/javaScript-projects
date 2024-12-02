# JSON Crash Course

- [video](https://www.youtube.com/watch?v=wI1CWzNtE-M)

## what is JSON
> it stands for JavaScript object notation and it's essentially a lightweight data interchange format and it's used to send data back and forth to a server as text it's actually based on JavaScript object literals so if you use JavaScript in the past you may have worked with something that resembles Jason already if you've never written or even heard of Jason before I think after you watch this you'll be quite surprised at how easy it is to understand and read and write so as I said Jason has arguably replaced XML and it's often used with Ajax which is that which actually stands for asynchronous JavaScript and XML so it's a little ironic that Ajax now uses Json more than it does XML which is actually in its name and if you don't know what **Ajax** is used for it's used to send data back and forth from client and server without having to refresh the page in a browser and later on I'm going to show you how we can make an AJAX request to a JSON file and output the content in the browser all right Jason can also be parsed with almost any modern programming language either natively or through libraries so even if you're not a JavaScript developer learning Jason is extremely relevant and I would also suggest that any programmer should learn JavaScript 

## To format and validate your JSON
[video](https://jsonlint.com/)

`JSON.stringify()`
- change it to a json string.
- stringify -> it use to change the object to json string.

`JSON.parse()`
- turn it back to an object.
- parse -> it use to turn json back to object.

### HTTP request through JavaScript 
- [video](https://www.w3schools.com/xml/xml_http.asp)
> is showing us how to make an HTTP request through JavaScript .

```
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          // Typical action to be performed when the document is ready:
          document.getElementById("demo").innerHTML = xhttp.responseText;
        }
      };
      xhttp.open("GET", "filename", true);
      xhttp.send();
```
>  I'll try to explain what's going on here so your browser has this XML HTTP request object so we're going to access that and put that into this variable all right then we're going to take that variable and we're going to say onreadystatechange equals a function and then we want to check for the ready state and the status ready state should be four which means that the response has been has been captured so we can use it and then status this is an HTTP status of 200 which means everything went. 