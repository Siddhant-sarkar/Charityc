import React, { useState } from "react";
import { CustomButton } from "../components";

const Chat = () => {
  const [prompt, setPrompt] = useState("");
  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("doing api call")
      const response = await fetch("http://localhost:6969/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      const responseData = await response.json();
      console.log(responseData.message.content);
      setApiResponse(responseData.message.content);
    } catch (e) {
      console.log(e);
      setApiResponse("Something is going wrong, Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 flex justify-between items-center flex-col h-5/6 rounded-[10px] sm:p-10 p-4 shadow-2xl">
      <div className="text-white text-6xl font-black basis-1/5">
        {" "}
        Ask us <span className="underline">Anything !</span>
      </div>
      <div className="h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 text-white text-2xl">
        {apiResponse && <p className="p-7">{apiResponse}</p>}
      </div>
      <form onSubmit={handleSubmit} className="w-full">
        <div className="flex pt-7 w-full h-full justify-evenly">
          <div className="flex h-full w-full bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 mr-10 align-middle">
            {/* <label className="h-full w-full text-center">Query</label> */}
            <input
              type="text"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="h-full w-full bg-transparent p-3 text-white font-bold focus:outline-none"
            />
          </div>
          <button
            disabled={loading || prompt.length === 0}
            type="submit"
            className="font-epilogue font-semibold text-[16px] leading-[26px] text-white min-h-[52px] px-4 rounded-[10px] bg-emerald-500"
          >
            {loading ? "Generating..." : "Generate"}
          </button>
        </div>
      </form>
      <div className="text-white"></div>
    </div>
  );
};

export default Chat;
