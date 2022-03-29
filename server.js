const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const { OAuth2Client } = require('google-auth-library');

dotenv.config();
const client = new OAuth2Client('744022124117-jsh7bo0agomo81eeftv34nm2p3568iuk.apps.googleusercontent.com');

const app = express();
app.use(express.json());

const users = [];

function upsert(array, item) {
  const i = array.findIndex((_item) => _item.email === item.email);
  if (i > -1) array[i] = item;
  else array.push(item);
}

app.post('/api/google-login', async (req, res) => {
  const { token } = req.body;
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.CLIENT_ID,
  });
  const { name, email, picture } = ticket.getPayload();
  upsert(users, { name, email, picture });
  res.status(201);
  res.json({ name, email, picture });
});

app.use(express.static(path.join(__dirname, '/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/src/index.html'))
);

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `Server is ready at http://localhost:${process.env.PORT || 5000}`
  );
});
