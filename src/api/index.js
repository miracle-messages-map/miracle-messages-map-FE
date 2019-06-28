import axios from "axios"

import coordinateData from "./coordinate.json"

const baseUrl = process.env.REACT_APP_API_URL || ""

export const verifyToken = () => {
    try {
        const authData = JSON.parse(localStorage.getItem("auth"))
        if (Object.keys(authData).length !== 4) return false
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
        const { data } = await axios.post(`${baseUrl}/api/login`, creds)
        localStorage.setItem("auth", JSON.stringify(data))
        return data
    } catch (err) {
        console.log(err)
        throw error
    }
}

export const addVolunteer = async ({
    firstName,
    lastName,
    email,
    password
}) => {
    const creds = { firstName, lastName, email, password }

    try {
        const { data } = await axios.post(`${baseUrl}/api/volunteers`, creds)
        localStorage.setItem("auth", JSON.stringify(data))
        return data
    } catch (err) {
        console.log(err)
        throw err
    }
}

export const getCoordinates = () => {
    return coordinateData
}

export const getVolunteers = async (page = 1) => {
    try {
        const { data } = await axios.get(`${baseUrl}/api/volunteers`)
        return data
    } catch (error) {
        console.log(error)
        throw error
    }
}
