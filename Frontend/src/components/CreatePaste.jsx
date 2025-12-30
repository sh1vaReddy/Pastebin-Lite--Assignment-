import { useState } from "react";
import axios from "axios";
import { backend } from "../constant/Config";
import {Link} from 'react-router-dom'

const CreatePaste = () => {
  const [content, setContent] = useState("");
  const [ttl, setTtl] = useState("");
  const [views, setViews] = useState("");
  const [url, setUrl] = useState("");
  const [copied, setCopied] = useState(false);

  const handleCreate = async () => {
    try {
      const res = await axios.post(`${backend}/api/pastes`, {
        content,
        
        ttl_seconds: ttl ? Number(ttl) * 60 : undefined,
        max_views: views ? Number(views) : undefined,
      });

      setUrl(res.data.url);
    } catch (error) {
      console.error(error.response?.data || error.message);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl shadow-2xl p-6">

        {url && (
          <div className="mb-6 bg-green-900/30 border border-green-600 rounded-xl p-4">
            <p className="text-green-400 font-semibold mb-2">
              ✅ Paste Created Successfully
            </p>

            <div className="flex items-center gap-3 bg-gray-800 rounded-lg px-3 py-2">
              <a
                href={url}
                className="text-blue-400 hover:underline break-all flex-1"
              >
                {url}
              </a>
              <button
                onClick={handleCopy}
                className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-lg"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
          </div>
        )}

        <h1 className="text-2xl font-bold text-white mb-4 text-center">
          Create New Paste
        </h1>

        <textarea
          rows={12}
          value={content}
          placeholder="Write your paste here..."
          className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          onChange={(e) => setContent(e.target.value)}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          <input
            type="number"
            min="0"
            value={ttl}
            placeholder="TTL (minutes)"
            className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setTtl(e.target.value)}
          />

          <input
            type="number"
            min="0"
            value={views}
            placeholder="Max views"
            className="bg-gray-800 text-gray-200 placeholder-gray-400 border border-gray-700 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={(e) => setViews(e.target.value)}
          />
        </div>

        <button
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-200 active:scale-95 disabled:opacity-50"
          onClick={handleCreate}
          disabled={!content.trim()}
        >
          Create New Paste
        </button>
      </div>
    </div>
  );
};

export default CreatePaste;
