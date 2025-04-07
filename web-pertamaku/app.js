const express = require('express');
const app = express();

// Serve file HTML
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Server berjalan di http://localhost:3000');
});