import { cn } from "@/lib/utils";

interface MenuItem {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
}

interface Footer2Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  className?: string;
  tagline?: string;
  menuItems?: MenuItem[];
  copyright?: string;
  bottomLinks?: {
    text: string;
    url: string;
  }[];
}

const Footer = ({
  logo = {
    src: "https://i.ibb.co.com/s96phyfB/logo.png",
    alt: "",
    title: "",
    url: "/",
  },
  className,
  tagline = "Finds you test!",
  menuItems = [
    {
      title: "Service",
      links: [
        { text: "Become a Rider", url: "/become-rider" },
        { text: "Become a Partner", url: "/become-partner" },
      ],
    },
    {
      title: "Company",
      links: [
        { text: "About", url: "/about" },
        { text: "Contact", url: "/contact" },
      ],
    },
    {
      title: "Social",
      links: [
        { text: "Facebook", url: "https://www.facebook.com/" },
        { text: "Instagram", url: "https://www.facebook.com/" },
        { text: "LinkedIn", url: "https://www.facebook.com/" },
      ],
    },
  ],
  copyright = "© 2026 Food Hub. All rights reserved.",
  bottomLinks = [
    { text: "Terms and Conditions", url: "terms-and-conditions" },
    { text: "Privacy Policy", url: "privacy" },
  ],
}: Footer2Props) => {
  return (
    <section className={cn("py-32 bg-gray-50 mt-10 p-3", className)}>
      <div className="container mx-auto">
        <footer>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex items-center gap-2 lg:justify-start">
                <img className="w-50" src={logo.src} alt="" />
              </div>
              <p className="mt-4 font-bold">{tagline}</p>
            </div>
            {menuItems.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 font-bold">{section.title}</h3>
                <ul className="space-y-4 text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium hover:text-primary"
                    >
                      <a href={link.url}>{link.text}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-24 flex flex-col justify-between gap-4 border-t pt-8 text-sm font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4">
              {bottomLinks.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.url}>{link.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer };
