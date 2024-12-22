// [novel]/chuong-[chapter]/chapter-loading.tsx
export default function ChapterLoading() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex justify-between mb-6">
        <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
        <div className="w-32 h-10 bg-gray-200 rounded animate-pulse" />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="w-3/4 h-8 bg-gray-200 rounded animate-pulse mb-4" />
        <div className="space-y-4">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="w-full h-4 bg-gray-200 rounded animate-pulse"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
