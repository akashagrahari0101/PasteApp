
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

const ViewPaste = () => {
  const { id } = useParams();

  const allPastes = useSelector(
    (state) => state.paste.pastes
  );

  // Find paste using ID
  const paste = allPastes.find(
    (p) => p._id === id
  );

  console.log('Final Paste:', paste);

  // Handle paste not found
  if (!paste) {
    return (
      <div className="flex flex-col items-center justify-center mt-20">
        <h1 className="text-3xl font-bold text-red-500">
          Paste Not Found!
        </h1>

        <Link
          to="/pastes"
          className="mt-5 px-5 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Back to My Pastes
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto px-5 py-8">

      <h1 className="text-3xl font-bold text-center mb-8">
        View Your Paste
      </h1>

      {/* Title */}
      <div className="flex flex-row gap-5 justify-between">
        <input
          className="p-3 rounded-xl mt-2 w-full border border-gray-300 bg-gray-100"
          type="text"
          value={paste.title}
          disabled
          readOnly
        />
      </div>

      {/* Content */}
      <div className="mt-8">
        <textarea
          className="rounded-xl mt-4 w-full p-4 border border-gray-300 bg-gray-100"
          value={paste.content}
          placeholder="Paste content"
          disabled
          readOnly
          rows={20}
        />
      </div>

      {/* Created Date */}
      <p className="text-sm text-gray-500 mt-4">
        Created At:{' '}
        {paste.createdAt
          ? new Date(paste.createdAt).toLocaleString()
          : 'Unknown'}
      </p>

      {/* Back Button */}
      <div className="mt-6">
        <Link
          to="/pastes"
          className="px-5 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700"
        >
          Back to Pastes
        </Link>
      </div>

    </div>
  );
};

export default ViewPaste;
