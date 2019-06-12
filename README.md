# QUERIES
## ALL USERS
```json
query {
  allUsers {
    content {
      name
      document
      age
      email
      password_digest
    }
    message
  }
}
```

## USER BY ID
```json
query {
  userById(id: 1) {
    content {
      name
      document
      age
      email
      password_digest
    }
    message
    status
  }
}
```

# MUTATIONS

## JWT
```json
mutation {
  signIn(user: {
    email: "dacherreragu@unal.edu.co"
    password: "123456"
  }) {
    content
    message
    status
  } 
}
```

## CREATE USER
```json
mutation {
  createUser(user: {
    name:"Dacherreragu"
    document:"123456789"
    age:18
    email: "prueba@test.prueba"
    password: "123456"
  }) {
    content {
      name
      document
      age
      email
      password_digest
    }
    message
    status
  }
}
```

## UPDATE USER 1
```json
mutation {
  updateUser(id:1, user: {
    name:"David Celiano Herrera Gutiérrez"
  }) {
    content {
      id
      name
      document
      age
      email
      password_digest
    }
    message
    status
  }
}
```

## UPDATE USER 2
```json
mutation {
  updateUser2(id:1, user: {
    name:"Celiano Herrera Gutiérrez"
  }) {
    content {
      id
      name
      document
      age
      email
      password_digest
    }
    message
    status
  }
}
```

## DELETE USER
```json
mutation {
  deleteUser(id: 3) {
    content {
      id
      name
      document
      age
      email
      password_digest
    }
    message
    status
  }
}
```

## VERIFY JWT
```json
mutation {
  verifyToken(jwt: "tokenjfddfkjxzjxzlk") {
    content
    message
    status
  }
}
```


