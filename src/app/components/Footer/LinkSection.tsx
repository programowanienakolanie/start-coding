type LinkSectionProps = {
  title: string;
  links: Array<{ href: string; label: string }>;
};

export const LinkSection = ({ title, links }: LinkSectionProps) => {
  return (
    <div>
      <h3 className="text-theme-base mb-7 font-semibold">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              className="text-theme-muted hover:text-theme-base transition-colors"
              href={link.href}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
