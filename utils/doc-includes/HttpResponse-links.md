```javascript
let links:any = {
  next: "http://foo.bar.com/link/next",
  last: "http://foo.bar.com/link/last"
};
exit(req, res.links(links));
```