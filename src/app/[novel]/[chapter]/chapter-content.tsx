// [novel]/chuong-[chapter]/chapter-content.tsx
interface ChapterContentProps {
  title: string;
  content: string;
}

export function ChapterContent({ title, content }: ChapterContentProps) {
  return (
    <div className="bg-gray-800 text-gray-100 rounded-lg shadow-lg p-6">
      <h1 className="text-2xl font-bold mb-4">{title}</h1>
      <article
        className="prose prose-invert max-w-none"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
