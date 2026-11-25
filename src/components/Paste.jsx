
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);

  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  // Search pastes by title
  const filteredData = pastes.filter((paste) =>
    paste.title?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Delete paste
  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
    toast.success('Paste deleted successfully!');
  }

  // Copy paste content
  async function handleCopy(content) {
    try {
      await navigator.clipboard.writeText(content);
      toast.success('Copied to clipboard!');
    } catch (error) {
      toast.error('Unable to copy content');
    }
  }

  // Share paste
  async function handleShare(pasteId) {
    const shareUrl = `${window.location.origin}/pastes/${pasteId}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: 'My Paste',
          url: shareUrl,
        });
      } else {
        await navigator.clipboard.writeText(shareUrl);
        toast.success('Share link copied!');
      }
    } catch (error) {
      if (error.name !== 'AbortError') {
        toast.error('Unable to share paste');
      }
    }
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-5 py-8">

      <h1 className="text-3xl font-bold text-center mb-6">
        My Pastes
      </h1>

      {/* Search Input */}
      <input
        className="w-full p-4 rounded-xl border border-gray-300 shadow-sm outline-none focus:ring-2 focus:ring-blue-500"
        type="search"
        placeholder="Search your pastes here..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Paste List */}
      <div className="flex flex-col gap-6 mt-8">

        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div
              className="border border-gray-200 rounded-xl p-5 shadow-md hover:shadow-lg transition-all"
              key={paste._id}
            >

              <h2 className="text-xl font-bold mb-3">
                {paste.title}
              </h2>

              <p className="text-gray-600 whitespace-pre-wrap break-words mb-5">
                {paste.content}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">

                <Link
                  to={`/?pasteId=${paste._id}`}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Edit
                </Link>

                <Link
                  to={`/pastes/${paste._id}`}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                >
                  View
                </Link>

                <button
                  onClick={() => handleDelete(paste._id)}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                >
                  Delete
                </button>

                <button
                  onClick={() => handleCopy(paste.content)}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  Copy
                </button>

                <button
                  onClick={() => handleShare(paste._id)}
                  className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900"
                >
                  Share
                </button>

              </div>

              {/* Created Date */}
              <p className="text-sm text-gray-400 mt-4">
                Created At:{' '}
                {paste.createdAt
                  ? new Date(paste.createdAt).toLocaleString()
                  : 'Unknown'}
              </p>

            </div>
          ))
        ) : (
          <div className="text-center py-10">
            <h2 className="text-xl font-semibold text-gray-500">
              No Pastes Found!
            </h2>
            <p className="text-gray-400 mt-2">
              Create a new paste or try another search.
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default Paste;
