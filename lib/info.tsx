import me from '../app/avatar.jpg';

export const name = 'Tony Huynh';
export const avatar = me;
export const about = () => {
  return (
    <>
    Founder of <a href="https://onepixelmedia.com" target="_blank" className="spc-link">One Pixel Media</a>
    </>
  );
};
export const bio = () => {
  return (
    <>
    I am a software engineer, founder of One Pixel Media, a digital marketing agency specialising in design, development and branding.
    </>
  );
};
