import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_API_KEY as string)

export default async function GeneratePromptAI (textPrompt : string){
    try{
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash"});
        const result = await model.generateContent(textPrompt);
        const text = result.response.text();;
        return{
            content: text
        }
    }
    catch(error){
        console.log('Error:',error)
    }
}