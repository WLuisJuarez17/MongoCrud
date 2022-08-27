
const customHeader = (req, res, next) => {
    try {
        const apiKey = req.headers.api_key;
        if (apiKey === '12345') {
            next();
        }else{
            res.status(403);
            res.send('Apikey is not valid');
        }
    } catch (error) {
        res.status(403)
        res.send({error: "Algo no cuadra"})
}
}
module.exports = { customHeader }