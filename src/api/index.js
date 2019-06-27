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
    const auth = {
        grant_type: "password",
        username: email,
        password: password
    }

    const headers = {
        Authorization: `Basic ${btoa("mmm-client:mmm-secret")}`,
        "Content-Type": "application/x-www-form-urlencoded"
    }
    try {
        const { data } = await axios.post(
            `https://mmm-api.herokuapp.com/oauth/token`,
            stringify(auth),
            {
                headers
            }
        )
        localStorage.setItem("auth", JSON.stringify(data))
        return data
    } catch (err) {
        throw error
    }
}
