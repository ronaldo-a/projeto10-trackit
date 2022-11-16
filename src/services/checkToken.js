function getToken () {
    const token = localStorage.getItem("token");
    if (token) {
        return token;
    }
}

export { getToken };