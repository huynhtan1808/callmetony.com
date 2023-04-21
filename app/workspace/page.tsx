import type { Metadata } from 'next';
import Card from 'components/card';

export const metadata: Metadata = {
  title: 'Góc làm việc',
  description:
    "Dưới đây là tất cả các đồ dùng công nghệ và phần mềm mình dùng để phục vụ cho công việc.",
};

export default function Workspace() {
  return (
    <section>
      <h1 className="font-bold text-xl mb-8">Góc làm việc</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Dưới đây là tất cả các đồ dùng công nghệ và phần mềm mình dùng để phục vụ cho công việc.
      </p>
      <em className="text-sm text-muted-100">*Lưu ý: một số link bên dưới là link tiếp thị liên kết (Affiliate),
       mình sẽ được một khoản hoa hồng nhỏ khi các bạn click và mua hàng qua link của mình.
       </em>

      <div className="flex flex-col space-y-6">
        <h3 id="computer-office" className="mt-8 mb-4 font-semibold">Computer / Office</h3>
        <Card
          title="13 Macbook Pro M1 2020"
          description="My laptop"
          imageUrl="/13-inch-macbook-pro-m1.png"
          cardUrl="https://shope.ee/4ATzrzXYEi"
        />
        
        <Card
          title="29inch LG Ultrawide 29WN600"
          description="My monitor"
          imageUrl="/LG-29WN600.png"
          cardUrl="https://shope.ee/9p8McSAlbc"
        />
        
        <Card
          title="Logitech MX Master 2 Mouse"
          description="My mouse"
          imageUrl="/Logitech-MX-Master-2.png"
          cardUrl="https://shope.ee/6KYUS3EU3H"
        />
        
        <Card
          title="Keychron K6 (Red) Mechanical Keyboard"
          description="My keyboard"
          imageUrl="/keychron-k6.png"
          cardUrl="https://siliconz.vn/project/23/keychron-k6.html?utm_source=webkeychron"
        />
        
        <Card
          title="Corsair T3 RUSH Gaming Chair"
          description="My chair"
          imageUrl="/corsair-t3-rush.png"
          cardUrl="https://shope.ee/8pFpQmb4PD"
        />


        <h3 id="coding" className="mt-8 mb-4 font-semibold">Coding</h3>

        <Card
          title="VSCode"
          description="Code editor"
          imageUrl="/vscode.webp"
          cardUrl="https://code.visualstudio.com/"
        />
        
        <Card
          title="Next.js"
          description="React framework"
          imageUrl="/nextjs.webp"
          cardUrl="https://nextjs.org/"
        />
        
        <Card
          title="TailwindCSS"
          description="CSS framework"
          imageUrl="/tailwind.webp"
          cardUrl="https://tailwindcss.com/"
        />
       
        <h3 id="software" className="mt-8 mb-4 font-semibold">Software</h3>

        <Card
          title="1Password"
          description="Password manager"
          imageUrl="/1-password.png"
          cardUrl="https://1password.com/"
        />
        
        <Card
          title="Spotify"
          description="Music and Podcasts"
          imageUrl="/spotify.png"
          cardUrl="https://open.spotify.com/"
        />
        
        <Card
          title="Grammarly"
          description="Free Writing assistant"
          imageUrl="/grammarly.png"
          cardUrl="https://app.grammarly.com/"
        />
        
        <Card
          title="ChatGPT"
          description="Artificial Intelligence (AI) chatbot"
          imageUrl="/chatgpt.png"
          cardUrl="https://openai.com/blog/chatgpt"
        />

      </div>
    </section>
  );
}
