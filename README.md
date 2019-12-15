## solutions
### vscode plugin
- check db

```
Azure Cosmos DB
```

### npm install

- bcrypt
>encoding password

- mongoose
>operate mongodb

- body-parser
>requestbody application/x-www-form-urlencoded or application/json
>
>Parse incoming request bodies in a middleware before your handlers, 
>available under the req.body property.

```js
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```