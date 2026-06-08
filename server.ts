import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize the standard Gemini client securely
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey
    ? new GoogleGenAI({
        apiKey,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      })
    : null;

  // Virtual Concierge bot API endpoint
  app.post("/api/concierge", async (req, res) => {
    try {
      const { message, history, language } = req.body;
      const lang = language === "ar" ? "ar" : "en";

      if (!message) {
        return res.status(400).json({ error: "Message is required" });
      }

      if (!ai) {
        // Soft fallback if the key is missing or not provided during startup
        const mockReply = lang === "ar"
          ? "أهلاً بك في فندق بريرا العليا الفاخر بالرياض! يسعدنا مساعدتك في أي استفسار حول الغرف والمرافق ومطعمنا وموقعنا المميز. كيف يمكننا خدمتك اليوم؟"
          : "Welcome to the luxurious Brera Olaya Hotel in Riyadh! We are delighted to assist you with any inquiries regarding our rooms, suites, amenities, premium dining, or prime location. How may we serve you today?";
        return res.json({ response: mockReply + " [Sensing Concierge Connectivity Mode]" });
      }

      // Rich luxury concierge system instruction (Bilingual support, premium styling)
      const systemInstruction = `
You are safe, polite, elegant, and highly helpful, serving as the Distinguished Virtual Concierge for the 5-star "Brera Olaya" Hotel in Riyadh, Saudi Arabia (فندق بريرا العليا).
Your tone must reflect absolute 5-star Saudi hospitality and modern elegance (فخامة هادئة، كرم ضيافة سعودي أصيل).
Keep your responses concise, incredibly polite, and highly helpful.
Provide response in the requested language: ${lang === "ar" ? "Arabic" : "English"}.

Hotel Details for your reference:
- Location: Olaya District, Riyadh, Saudi Arabia (شارع العليا، مقابل مكتبة King Fahd National Library، وبالقرب من برج الفيصلية Al Faisaliah Tower). Highly strategic central location.
- Key Facilities & Amenities:
  * Luxury Outdoor Swimming Pool (مسبح خارجي فاخر) offering a serene relaxation space.
  * Meticulous Fitness Center (مركز لياقة بدنية) with the latest health and cardio equipment.
  * High-class Dining Restaurant (مطعم فاخر) presenting diverse gourmet buffet breakfast & international culinary masterpieces.
  * Sophisticated Cafe (مقهى أنيق) for meetings & specialty coffee lovers.
  * Free Safe Private Parking (مواقف سيارات مجانية وآمنة).
  * High-speed Free Wi-Fi (إنترنت لاسلكي سريع ومجاني) across the entire hotel premises.
  * 24/7 Professional Room Service & Concierge Desk (خدمة غرف واستقبال على مدار الساعة).
  * Business Center with high-speed internet and elite meeting rooms (مركز أعمال وقاعات اجتماعات).
- Premium Rooms & Suites:
  * Deluxe Room (غرفة ديلوكس): Perfect balance of class and comfort, king size bed, exquisite marble bathroom.
  * Executive Room (غرفة تنفيذية): Wider area, panoramic window looking at Olaya street/skyline, fully equipped workspace.
  * Premium Suite (جناح بريميوم): Stunning bedroom with separate elegant living/salon area, executive privileges.
  * Royal Suite (الجناح الملكي): The zenith of hospitality, vast space, breathtaking views, VIP services.
- Special Online Booking Offer: Direct reservation on our website receives early check-in (subject to availability), late check-out till 3 PM, and 15% discount code "ROYAL15" for SPA & Dining!
`;

      const contents = [];
      if (history && Array.isArray(history)) {
        for (const turn of history) {
          contents.push({
            role: turn.role === "user" ? "user" : "model",
            parts: [{ text: turn.text }]
          });
        }
      }
      contents.push({
        role: "user",
        parts: [{ text: message }]
      });

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      res.json({ response: response.text });
    } catch (err: any) {
      console.error("Gemini Assistant Failure:", err);
      res.status(500).json({ error: err.message || "An error occurred on the Virtual Concierge server" });
    }
  });

  // Serve static assets / launch Vite Dev middleware
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Brera Olaya Fullstack Server successfully running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
