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
      <div className="flex flex-col space-y-6">
        <h3 id="computer-office" className="mt-8 mb-4 font-semibold">Computer / Office</h3>
        <Card
          title="13 Macbook Pro M1 2020"
          description="My laptop"
          imageUrl="/13-inch-macbook-pro-m1.png"
          cardUrl="#"
        />
        
        <Card
          title="29inch LG Ultrawide 29WN600"
          description="My monitor"
          imageUrl="/LG-29WN600.png"
          cardUrl="#"
        />
        
        <Card
          title="Logitech MX Master 2 Mouse"
          description="My mouse"
          imageUrl="/Logitech-MX-Master-2.png"
          cardUrl="#"
        />
        
        <Card
          title="Keychron K6 (Red) Mechanical Keyboard"
          description="My keyboard"
          imageUrl="/keychron-k6.png"
          cardUrl="#"
        />
        
        <Card
          title="Corsair T3 RUSH Gaming Chair"
          description="My chair"
          imageUrl="/corsair-t3-rush.png"
          cardUrl="#"
        />


        <h3 id="coding" className="mt-8 mb-4 font-semibold">Coding</h3>

        <Card
          title="VSCode"
          description="Code editor"
          imageUrl="/vscode.webp"
          cardUrl="#"
        />
        
        <Card
          title="Next.js"
          description="React framework"
          imageUrl="/nextjs.webp"
          cardUrl="/nextjs.webp"
        />
        
        <Card
          title="TailwindCSS"
          description="CSS framework"
          imageUrl="/tailwind.webp"
          cardUrl="#"
        />
       
        <h3 id="software" className="mt-8 mb-4 font-semibold">Software</h3>

        <Card
          title="1Password"
          description="Password manager"
          imageUrl="/1-password.png"
          cardUrl="#"
        />
        
        <Card
          title="Spotify"
          description="Music and Podcasts"
          imageUrl="/spotify.png"
          cardUrl="#"
        />
        
        <Card
          title="Grammarly"
          description="Writing assistant"
          imageUrl="/grammarly.png"
          cardUrl="#"
        />
        
        <Card
          title="ChatGPT"
          description="Artificial Intelligence (AI) chatbot"
          imageUrl="/chatgpt.png"
          cardUrl="#"
        />

      </div>
    </section>
  );
}
