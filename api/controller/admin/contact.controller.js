import { Author } from "../../models/author.model.js";
import { Contact } from "../../models/pageModels/contact.model.js";

export const readContactInfo = async (req, res) => {
    const id = req.userId;
    try {
        const isOwner = await Author.findOne({ _id: id, position: "owner" });
        if (!isOwner) {
            return res.status(200).json({ message: "You are not authorized to access contacts", position: "author" });
        }

        const contactInfo = await Contact.find();
        res.status(200).json(contactInfo);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Something went wrong" });
    }
}
