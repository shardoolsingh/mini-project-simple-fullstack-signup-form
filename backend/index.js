const express = require('express');
const app = express();

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.use(express.urlencoded({ extended: true}));

// implement routes

// show a welcome message at home route
app.get('/', (req, res) => {
	res.send("Welcome to our dashboard!");
});

// create users
app.post('/users', async (req, res) => {
	const { name, email, password } = req.body;
	const user = await prisma.users.create({
		data: { name, email, password },
	});

	res.json(user);
});

// read all users
app.get('/users', async (req, res) => {
	const users = await prisma.users.findMany();

	res.json(users);
});

// read a single user
app.get('/users/:id', async (req, res) => {
	const user = await prisma.users.findUnique({
		where: { id: parseInt(req.params.id) },
	});

	res.json(user);
});

// update a single user data
app.put('/users/:id', async (req, res) => {
	const { name, email, password } = req.body;
	const user = await prisma.users.update({
		where: {  id: parseInt(req.params.id) },
		data: { name, email, password },
	});

	res.json(user);
});

// delete a user
app.delete('/users/:id', async (req, res) => {
	const user = await prisma.users.delete({
		where: { id: parseInt(req.params.id) },
	});

	res.json(user);
});

// start the server
const PORT = 3003;
app.listen(PORT, () => {
	console.log(`Express server running at http://localhost:${PORT}`);
});
