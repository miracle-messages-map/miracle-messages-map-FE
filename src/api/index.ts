export const verifyToken = () => {
    const token = localStorage.getItem("token")
    if (!token || token.length < 1) return false
    return true
}
