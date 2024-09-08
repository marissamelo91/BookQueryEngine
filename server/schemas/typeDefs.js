module.exports = `

    type Book {
        authors: [String]
        description: String
        bookId: String
        image: String
        link: String
        title: String
    }

    type User {
        _id: ID
        username: String
        email: String
        bookCount: Int
        savedBooks: [Book]
    }

    type Auth {
        token: String
        user: User
    }


    type Query {
        me: User
    }


    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String, password: String): Auth
        saveBook(authors: [String], description: String, bookId: String, image: String, link: String, title: String): User
        removeBook(bookId: String): User
    }
`