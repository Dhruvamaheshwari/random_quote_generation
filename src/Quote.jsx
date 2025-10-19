
import { useState } from "react";


function Quote() {

    
    const [quote, setQuote] = useState("Click the button to get a random quote!");
    const [author , setAuthor] = useState("");
    const [loading, setLoading] = useState(false);
    const apiKey = import.meta.env.VITE_API_KEY;
    

    const handleQuote = async () => {
        setLoading(true);
        try {
            const result = await fetch("https://api.api-ninjas.com/v1/quotes", {
                method: "GET",
                headers: {
                    "X-Api-Key":apiKey,
                },
            });

            if (!result.ok) {
                throw new Error("something went wrong");
            }

            const data = await result.json();
            setQuote(data[0].quote);
            setAuthor(data[0].author);
        } catch (error) {
            console.log("something went wrong");
            setQuote("something went wrong");
            setAuthor("");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="flex flex-col justify-center items-center m-5 mt-75 border-2 p-8 rounded-xl w-1/2 ml-100 bg-linear-to-r from-sky-300 to-red-300">
            <div className="border-2 h-auto w-1/2 rounded-lg p-3 bg-blue-50">
                {quote} <b>[Author:  {author} ]</b>
            </div>
            <button
                onClick={handleQuote}
                className="border-2 mt-3 rounded-lg p-2 w-1/4 bg-gray-400 cursor-pointer hover:shadow-lg shadow-black"
                disabled={loading}>
                {loading ? "loading..." : "New Quote"}
            </button>
        </div>
    );
}
export default Quote;
