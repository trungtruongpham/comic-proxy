// [novel]/chuong-[chapter]/chapter-error.tsx
"use client";

import { useEffect } from "react";

interface ChapterErrorProps {
  error: Error;
  reset: () => void;
}

export default function ChapterError({ error, reset }: ChapterErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Chapter error:", error);
  }, [error]);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-red-600 mb-4">
          Failed to Load Chapter
        </h2>
        <p className="mb-4 text-gray-600">
          We encountered an error while loading the chapter. Please try again.
        </p>
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  );
}
