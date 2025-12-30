import { useEffect, useState } from "react";
import axios from 'axios';
import { backend } from "../constant/Config";
import {useParams} from 'react-router-dom'

const  Pasteviewer = () => {
      const { id } = useParams();
  const [copied, setCopied] = useState(false);
  const[content,setcontent]=useState("");
  const[error,setError]=useState("");
 

  const handleCopy = () => {
    navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(()=>{
    const fetchcontent=async()=>{
       try
      {
          const response= await axios.get(`${backend}/api/p/${id}`)
          setcontent(response.data.content)
          setError("");
      }
      catch(err)
      {
         const message =
          err.response?.data?.error ||
          err.response?.data?.message ||
          "Something went wrong";
        setError(message);
        setcontent("");
      }
    }
    fetchcontent();
  },[id])

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6">
         {error && (
          <div className="mb-4 rounded-lg border border-red-700 bg-red-900/30 p-4 text-red-400 text-sm">
            ⚠️ {error}
          </div>
        )}
        {!error && (<>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-white">
            Paste Content
          </h2>

          <button
            onClick={handleCopy}
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <pre className="bg-black border border-gray-700 rounded-xl p-4 overflow-auto max-h-[70vh]">
          <code className="text-gray-200 text-lg font-mono whitespace-pre-wrap break-words">
            {content}
          </code>
        </pre>
        </>)}
      </div>
    </div>
  );
};

export default   Pasteviewer;
