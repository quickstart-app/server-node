git clone

npm install

rename .env.examples to .env

npm run dev

open http://localhost:3000/graphiql

try query:

query {
  Hello (name:"Rafael"){
    message
  }
  GetFortuneCookie {
    message
  }
}