# QUERIES
## ALL USERS
query {
  allUsers {
    content {
      name
      document
      age
      gender
      reputation
      email
      password_digest
    }
    message
  }
}

## USER BY ID
query {
  userById(id: 1) {
    content {
      name
      document
      age
      gender
      reputation
      email
      password_digest
    }
    message
  }
}

# MUTATIONS

## JWT
mutation {
  signIn(user: {
    email: "dacherreragu@unal.edu.co"
    password: "123456"
  }) {
    jwt
    message
  } 
}

## CREATE USER
mutation {
  createUser(user: {
    name:"Dacherreragu"
    document:"123456789"
    age:18
    gender: "Male"
    email: "prueba@test.prueba"
    password: "123456"
  }) {
    content {
      name
      document
      age
      gender
      reputation
      email
      password_digest
    }
    message
  }
}

## UPDATE USER 1
mutation {
  updateUser(id:1, user: {
    name:"David Celiano Herrera Gutiérrez"
  }) {
    content {
      id
      name
      document
      age
      gender
      reputation
      email
      password_digest
    }
    message
  }
}

## UPDATE USER 2
mutation {
  updateUser2(id:1, user: {
    name:"Celiano Herrera Gutiérrez"
  }) {
    content {
      id
      name
      document
      age
      gender
      reputation
      email
      password_digest
    }
    message
  }
}

## DELETE USER
mutation {
  deleteUser(id: 3) {
    content {
      id
      name
      document
      age
      gender
      reputation
      email
      password_digest
    }
    message
  }
}

