import axios from "axios"
import { stringify } from "querystring"

export const verifyToken = () => {
    let token = ""
    try {
        token = JSON.parse(localStorage.getItem("auth")).access_token
        if (!token || token.length < 1) return false
        return true
    } catch (error) {
        return false
    }
}

export const login = async ({ email, password }) => {
    const error = {
        message: "Incorrect email and/or password",
        statusCode: 401
    }

    const creds = { email, password }

    try {
        const { data } = await axios.post("/api/login", creds)
        localStorage.setItem("auth", JSON.stringify(data))
        return data
    } catch (err) {
        console.log(err)
        throw error
    }
}
