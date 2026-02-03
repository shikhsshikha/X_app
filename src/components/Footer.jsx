import { Link } from "react-router-dom";

const links = [
  { label: "About", path: "/about" },
  { label: "Download the X app", path: "/download" },
  { label: "Grok", external: true, url: "https://grok.com" },
  { label: "Help Center", path: "/help" },
  { label: "Terms of Service", path: "/terms" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Cookie Policy", path: "/cookies" },
  { label: "Accessibility", path: "/accessibility" },
  { label: "Ads info", path: "/ads" },
  { label: "Blog", path: "/blog" },
  { label: "Careers", path: "/careers" },
  { label: "Brand Resources", path: "/brand" },
  { label: "Advertising", path: "/advertising" },
  { label: "Marketing", path: "/marketing" },
  { label: "X for Business", path: "/business" },
  { label: "Developers", path: "/developers" },
  { label: "News", path: "/news" },
  { label: "Settings", path: "/settings" },
];

const Footer = () => {
  return (
    <footer className="w-380 text-[#71767b] text-[11px] leading-4 py-4">
      <div className="flex justify-center whitespace-nowrap overflow-hidden px-2">
        {links.map((item, index) => (
          <span key={item.label} className="flex items-center">
            {index !== 0 && <span className="mx-2">|</span>}

            {item.external ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                {item.label}
              </a>
            ) : (
              <Link
                to={item.path}
                className="hover:underline cursor-pointer"
              >
                {item.label}
              </Link>
            )}
          </span>
        ))}

        <span className="flex items-center">
          <span className="mx-2">|</span>
          <span>© 2026 X Corp.</span>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
