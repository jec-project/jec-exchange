```javascript
let formatMap:any = {
  "text/plain": ()=> { res.send("Hello World!"); },
  "text/html": ()=> { res.send("<p>Hello World!</p>"); },
  "application/json": ()=> { res.send({ message: "Hello World!" }); }
};
exit(req, res.format(formatMap));
```