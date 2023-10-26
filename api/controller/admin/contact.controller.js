import { Contact } from "../../models/pageModels/contact.model.js";

export const readContactInfo = async (req, res) => {
    try {
        const contactInfo = await Contact.find();
        res.status(200).json(contactInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}