import{GoogleGenAI} from "@google/genai"
const ai = new GoogleGenAI({});
async function main() {
    const response = await ai.interactions.create({
        model: "gemini-3.8-flash",
        input:"explian photosynthesis in one simple sentence"
    })
    console.log(response.output_text)
}
main();