
const handleHttpError = (res, message = "Algo no cuadra", code = 403) => {
    res.status(code);
    res.send({error: message});
};

module.exports = { handleHttpError };