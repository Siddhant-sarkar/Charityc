import React, { useState } from "react";
import { CustomButton } from "../components";

const Chat = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer YOUR_API_KEY", // Replace 'YOUR_API_KEY' with your actual API key
          },
          body: JSON.stringify({
            prompt: query,
            max_tokens: 50, // Change the max_tokens as needed
          }),
        }
      );

      const data = await response.json();
      setResult(data.choices[0].text.trim());
    } catch (error) {
      console.error("Error:", error);
      // Handle error state or display an error message
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 flex justify-between items-center flex-col h-5/6 rounded-[10px] sm:p-10 p-4 shadow-2xl">
      <div className="text-white text-6xl font-black basis-1/5">
        {" "}
        Ask us <span className="underline">Anything !</span>
      </div>
      <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white text-2xl">
        {result && (
          <p className="mt-4">
            Result: <strong>{result}</strong>
          </p>
        )}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex pt-7 w-full h-full justify-evenly">
          <div className="flex h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 mr-10 align-middle">
            {/* <label className="h-full w-full text-center">Query</label> */}
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="h-full w-full bg-transparent text-white"
            />
          </div>
          <CustomButton
            btnType="submit"
            title="Ask Now !"
            styles="bg-[#1dc071]"
          />
        </div>
      </form>
      <div className="text-white"></div>
    </div>
  );
};

export default Chat;
