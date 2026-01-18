import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "How It Works", href: "#how-it-works" },
      { name: "Pricing", href: "#pricing" },
      { name: "Download App", href: "#download" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press Kit", href: "#press" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact Us", href: "#contact" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Privacy Policy", href: "#privacy" }
    ],
    partners: [
      { name: "Join as Court Owner", href: "#court-owner" },
      { name: "Become a Coach", href: "#coach" },
      { name: "Partner Programs", href: "#partners" },
      { name: "Affiliate", href: "#affiliate" }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="relative bg-[#06131f] text-white border-t border-white/10">
      

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">
        
        {/* Top Section: Brand */}
        <div className="mb-16">
          <div className="max-w-md">
            <h3 className="text-3xl font-extrabold text-green-400 mb-3">
              Courtify
            </h3>
            <div className="w-16 h-1 bg-green-400 mb-4" />
            <p className="text-white/70 leading-relaxed mb-6">
              Pakistan's first comprehensive sports booking platform. Connecting players, coaches, and venues across the nation.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors duration-300">
                <MapPin size={18} className="shrink-0" />
                <span className="text-sm">Karachi, Pakistan</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors duration-300">
                <Mail size={18} className="shrink-0" />
                <span className="text-sm">hello@courtify.pk</span>
              </div>
              <div className="flex items-center gap-3 text-white/60 hover:text-green-400 transition-colors duration-300">
                <Phone size={18} className="shrink-0" />
                <span className="text-sm">+92 300 1234567</span>
              </div>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-white/10">
          
          {/* Product Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Product
            </h5>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Company
            </h5>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Support
            </h5>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners Links */}
          <div>
            <h5 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">
              Partners
            </h5>
            <ul className="space-y-3">
              {footerLinks.partners.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-white/60 hover:text-green-400 transition-colors duration-300 text-sm block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section: Social + Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-green-400 hover:border-green-400 hover:scale-110 transition-all duration-300 group"
                >
                  <Icon className="text-white/60 group-hover:text-[#06131f] transition-colors duration-300" size={18} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-white/50 text-sm text-center md:text-right">
            <p>© {currentYear} Courtify. All rights reserved.</p>
            <p className="mt-1">Made with ❤️ in Pakistan</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;