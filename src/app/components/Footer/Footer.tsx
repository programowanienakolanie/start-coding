import { LinkSection } from './LinkSection';
import { SocialLinks } from '../SocialLinks/SocialLinks';
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/#about-us', label: 'About us' },
    {
      href: '',
      label: 'YouTube',
    },
    { href: '/#faq', label: 'FAQ' },
  ];

  const learnLinks = [
    { href: '/introduction', label: 'Get started' },
    { href: '/challanges/react', label: 'React' },
    { href: '/challanges/javascript', label: 'JavaScript' },
    { href: '/challanges/html', label: 'HTML' },
  ];

  const supportLinks = [
    {
      href: 'https://github.com/Frontlive/Start-Coding/issues/new/',
      label: 'Report a bug',
    },
  ];

  return (
    <section className="m-auto w-full max-w-7xl px-8 py-8">
      <footer>
        <div className="flex justify-between">
          <div>
            <h2 className="gradient-text mb-1 text-3xl font-extrabold">
              start-coding.pl
            </h2>
            <a
              className="text-theme-muted hover:text-theme-base text-sm transition-colors"
              href="https://github.com/Frontlive/Start-Coding"
            >
              {currentYear} github.com/Frontlive/Start-Coding
            </a>
          </div>
          <div></div>
        </div>

        <div className="border-t-basetext/10 mt-10 flex flex-wrap justify-between gap-8 border-t-2 pt-10">
          <div className="flex flex-wrap gap-20">
            <LinkSection title="Quick Links" links={quickLinks} />
            <LinkSection title="Learn" links={learnLinks} />
            <LinkSection title="Support" links={supportLinks} />
          </div>
          <SocialLinks />
        </div>

        <ul className="text-theme-muted mt-8 flex flex-wrap gap-4"></ul>
      </footer>
    </section>
  );
};
