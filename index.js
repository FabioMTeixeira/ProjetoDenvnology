const express = require('express');
const mongoose = require('mongoose');
const validUrl = require("valid-url");

const models = require('./models');

const app = express();
app.use(express.json());

const PORT = 9000;
const DATABASE_URL = 'mongodb://localhost:27017/savelink';

const main = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(DATABASE_URL);

        app.listen(PORT, () => {
            console.log(`Up and running on PORT ${PORT}`)
        });
    } catch(error) {
        console.error(error);
        process.exit(1);
    };
};

app.get('/links',  async (req, res) => {
    // Obtenha todos os itens
    try {
        const list = await models.List.find({});
        res.json({ list });
    } catch (err) {
        res.status(500).json({ message: "Error getting links" });
    }
});

app.post('/link', async (req, res) => {
    // Crie um novo item
    const { title, link } = req.body;

    if (!title || !link) {
        return res.status(400).json({ message: "Title and link are required" });
    }

    if (!validUrl.isUri(link)) {
        return res.status(400).json({ message: "Invalid link" });
    }

    try {
        const newList = new models.List({ title, link });
        const savedList = await newList.save();
        res.json(savedList);
    } catch (err) {
        res.status(500).json({ message: "Error saving link" });
    }
});

app.put('/link/:id', async (req, res) => {
    // Atualize um item existente
    const { id } = req.params;
    const { title, link } = req.body;

    if (!title && !link) {
        return res.status(400).json({ message: "Title or link are required" });
    }

    if (link && !validUrl.isUri(link)) {
        return res.status(400).json({ message: "Invalid link" });
    }

    try {
        const updatedList = await models.List.findByIdAndUpdate(
            id,
            { $set: { title, link } },
            { new: true }
        );

        if (!updatedList) {
            return res.status(404).json({ message: "List not found" });
        }

        res.json(updatedList);
    } catch (err) {
        res.status(500).json({ message: "Error updating list" });
    }
});

app.delete('/link/:id', async (req, res) => {
    // Exclua um item existente
    const { id } = req.params;

    try {
        const deletedLink = await models.List.findByIdAndDelete(id);

    if (!deletedLink) {
        return res.status(404).json({ message: "List not found" });
    }

    res.json({ message: "List deleted" });
    } catch (err) {
        res.status(500).json({ message: "Error deleting list" });
    }
});

main();