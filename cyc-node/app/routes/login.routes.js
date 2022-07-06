module.exports = app => {
    app.use('/Login', (req, res) => {
        res.send({
            token: 'test123'
        });
    });
}
