# My Contacts
- This project was created to exercise my skills in reactjs
- It's a web site to save contacts
- Save the inforations
  - Name
  - E-mail
  - Phone
  - Category (ex.: instgagra)
  
## Back-end
- It's an API to connect on database postgres
- manages searching, creating and updating contacts and categories in the database
### Technologies
- NodeJS
- Express
- pg (used to create querys in postgres)

### To use
- Open the folder server
- Envairoment variables
```
  POSTGRES_HOST=<database_host>
  POSTGRES_PORT=<database_port>
  POSTGRES_USER=<database_user>
  POSTGRES_PASSWORD=<database_password>
  POSTGRES_DATABASE=<database_name>
  CORS_ORIGIN=<front-end_URL>
```
- The CORS_ORIGIN must be equal to front-end acess URL or *
  - Current: 'http://localhost:5173'
- Run the commands
```
  $ yarn add

  $ yarn start
```

## Front-end
- Create the interation interface
- Communicates with the API
### Technologies
- ReactJS
- React Router
- Styled Components
- Prop Types
- Vite

### To use
- Open de folder web
- Run the commands
```
  $ yarn add

  $ yarn dev
```
