```
git clone https://github.com/quickstart-app/server-node.git
```

```
npm install
```

rename .env.example to .env

```
mv .env.example .env
```


```
npm run dev
```

open http://localhost:3000/graphiql

try query:
```
query {
  Hello (name:"Rafael"){
    message
  }
  GetFortuneCookie {
    message
  }
}
```
