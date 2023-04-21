import Card from "components/card";
import ReadingProgressBar from "components/reading";


export default function ReadingPage() {
    return (
      <section>
        <h1 className="font-semibold text-xl">Reading</h1>
        <div className="my-5 prose prose-neutral dark:prose-invert text-neutral-800 dark:text-neutral-200">
            <p>
                Mình không thường xuyên đọc sách nhưng
                luôn cố gắng đọc ít nhất 1 cuốn sách mỗi tháng
                (thường là vào ban đêm, trước khi đi ngủ).
            </p>
        </div>
        <ReadingProgressBar/>
        <div className="mt-8">
            <p>Sách đang đọc</p>
                <div className="mt-8 grid grid-cols-2 gap-4 md:gap-14">
                <Card
                title="Gian Nan Chồng Chất Gian Nan"
                author="Ben Horowitz"
                imageUrl="/gian-nan-chong-chat-gian-nan.jpeg"
                buyUrl="https://www.fahasa.com/gian-nan-chong-chat-gian-nan-tai-ban-2018.html"
                />
               
                </div>
        </div>
      </section>
    );
  }
  