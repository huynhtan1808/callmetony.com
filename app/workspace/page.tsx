import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Workspace',
  description:
    "Here's what tech I'm currently using for coding, videos, and music.",
};

export default function Workspace() {
  return (
    <section>
      <h1 className="font-bold text-3xl  mb-8">My Workspace</h1>
      <p className="text-neutral-700 dark:text-neutral-300 mt-2 mb-8">
        Here's what tech I'm currently using for coding, videos, and music.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <h3 id="computer-office">Computer / Office</h3>
        <ul>
          <li>16&quot; Macbook Pro (2020)</li>
          <li>13" Macbook Pro M1 2020</li>
          <li>29" LG Ultrawide 29WN600</li>
          <li>Logitech MX Master 2 Mouse</li>
          <li>Keychron K6 (Red) Mechanical Keyboard</li>
          <li>Corsair T3 RUSH Gaming Chair</li>
        </ul>
        <h3 id="coding">Coding</h3>
        <ul>
          <li>
            Editor: VSCode
          </li>
          <li>Theme: One Dark Pro</li>
        </ul>
        <h3 id="software">Software</h3>
        <ul>
          <li>1Password</li>
          <li>Spotify</li>
          <li>CleanShot X</li>
          <li>RetroClip</li>
          <li>Grammarly</li>
          <li>Texts</li>
          <li>Raycast</li>
          <li>Screenflow</li>
        </ul>
      </div>
    </section>
  );
}
