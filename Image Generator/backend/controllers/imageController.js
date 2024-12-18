import userModel from "../models/userModel.js";
import FormData from "form-data";
import axios from "axios";

const BASE_URL = "https://clipdrop-api.co/text-to-image/v1";

export const generateImage = async (req, res) => {
    try {
        const { userId, prompt } = req.body;

        const user = await userModel.findById(userId);

        if (!user || !prompt) {
            return res.json({success: false, message: "Missing details."});
        }

        if (user.creditBalance < 0 || userModel.creditBalance < 0) {
            return res.json({success: false, message: "No credit balance.", creditBalance: userModel.creditBalance});
        }

        const formData = new FormData();
        formData.append("prompt", prompt);

        const { data } = await axios.post(BASE_URL, formData, {
            headers: {
                'x-api-key': process.env.CLIPDROP_API,
                'content-type': 'multipart/form-data',
            },
            responseType: "arraybuffer",
        });

        const base64Image = Buffer.from(data, "binary").toString("base64");
        const resultImage = `data:image/png;base64,${base64Image}`;

        await userModel.findByIdAndUpdate(user._id, { creditBalance: user.creditBalance - 1 });

        res.json({success: true, message: "Image generated.", creditBalance: user.creditBalance - 1, resultImage});
    } catch (err) {
        console.error(err);
        res.json({success: false, message: err.message});
    }
}