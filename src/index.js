const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`Hold onto thine butts on ${process.env.PORT}`);
});