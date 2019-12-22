## solutions
### nodejs project structure

```
.
├── config                  # App configuration files
│   ├── sequalize.json        # Sequalize config
│   ├── serviceOne.json       # ServiceOne config
│   └── ...                 # Other configurations
├── routes                  
│   ├── controllers         # Request managers
│   ├── middlewares         # Request middlewares
│   └── routes.js           # Define routes and middlewares here
├── services                # External services implementation   
│   ├── serviceOne
│   └── serviceTwo
│   └── ...                 # Other services
├── db                      # Data access stuff  (Sequalize mostly)
│   ├── models              # Models
│   ├── migrations          # Migrations
│   ├── seeds               # Seeds
│   └── index.js            # Sequalize instantiation
├── core                    # Business logic implementation
│   ├── accounts.js         
│   ├── sales.js            
│   ├── comments.js              
│   └── ...                 # Other business logic implementations
├── utils                   # Util libs (formats, validation, etc)
├── tests                   # Testing
├── scripts                 # Standalone scripts for dev uses
├── pm2.js                  # pm2 init
├── shipitfile.js           # deployment automation file
├── package.json           
├── README.md         
└── app.js                  # App starting point

```

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