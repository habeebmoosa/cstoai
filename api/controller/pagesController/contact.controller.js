import { Contact } from "../../models/pageModels/contact.model.js";

export const sendContactInfo = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newContact = new Contact({ name, email, message });
        await newContact.save();
        res.status(201).json({ message: "Thank you for contacting us" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}

export const readContactInfo = async (req, res) => {
    try {
        const contactInfo = await Contact.find();
        res.status(200).json(contactInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}