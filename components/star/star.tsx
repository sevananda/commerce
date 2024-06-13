import React from 'react';

const Star = ( filled ) => {
  return (
    <svg
      className={`w-6 h-6 ${filled ? 'text-yellow-500' : 'text-gray-300'}`}
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.862 5.736a1 1 0 00.95.69h6.037c.969 0 1.372 1.24.588 1.81l-4.893 3.553a1 1 0 00-.364 1.118l1.862 5.736c.3.921-.755 1.688-1.54 1.118l-4.893-3.553a1 1 0 00-1.176 0l-4.893 3.553c-.784.57-1.839-.197-1.54-1.118l1.862-5.736a1 1 0 00-.364-1.118L2.757 11.16c-.784-.57-.381-1.81.588-1.81h6.037a1 1 0 00.95-.69l1.862-5.736z"
      />
    </svg>
  );
};

export default Star;
