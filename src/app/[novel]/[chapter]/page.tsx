// [novel]/chuong-[chapter]/chapter-page.tsx
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ChapterService } from "@/services/chapter.service";
import { ChapterParams } from "@/types/chapter.types";
import { ChapterNavigation } from "./chapter-navigation";
import { ChapterContent } from "./chapter-content";

export default async function ChapterPage({
  params,
}: {
  params: Promise<ChapterParams>;
}) {
  const novelInfo = await params; // Simplified assignment
  const chapterNumber = novelInfo.chapter.replace("chapter-", "");

  console.log("novelInfo: ", novelInfo);
  console.log("chapterNumber: ", chapterNumber);

  try {
    const response = await ChapterService.fetchChapter(
      novelInfo.novel,
      chapterNumber
    );

    if (!response.ok) {
      throw new Error(`Failed to fetch chapter ${chapterNumber}`);
    }

    const html = await response.text();
    const { title, content } = ChapterService.parseContent(html);

    return (
      <div className="max-w-4xl mx-auto p-2 flex flex-col gap-y-4">
        <ChapterNavigation
          prevIcon={<ChevronLeft className="w-5 h-5 mr-2" />}
          nextIcon={<ChevronRight className="w-5 h-5 ml-2" />}
          novel={novelInfo.novel}
          chapter={Number(chapterNumber)}
        />
        <ChapterContent title={title} content={content} />
        <ChapterNavigation
          className="mt-16 mb-24"
          prevIcon={<ChevronLeft className="w-5 h-5 mr-2" />}
          nextIcon={<ChevronRight className="w-5 h-5 ml-2" />}
          novel={novelInfo.novel}
          chapter={Number(chapterNumber)}
        />
      </div>
    );
  } catch (error) {
    throw error; // Will be caught by error boundary
  }
}
