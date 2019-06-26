export const verifyToken = () => {
    const token = localStorage.getItem("token")
    if (!token || token.length < 1) return false
    return true
}

interface LoginCredentials {
    email: string
    password: string
}

interface ServerError {
    message: string
    statusCode: number
}

interface AuthToken {
    token: string
}

export const login = ({ email, password }: LoginCredentials) => {
    const error: ServerError = {
        message: "Incorrect email and/or password",
        statusCode: 404
    }
    return new Promise((resolve, reject) => {
        if (email !== "test@test.com") return reject(error)
        if (password.length < 8) return reject(error)
        resolve({ token: "sfsdflkjsldfkjs" })
    })
}
