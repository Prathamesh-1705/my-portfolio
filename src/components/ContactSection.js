import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowUpRight } from 'lucide-react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

export default function ContactSection() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const contactMethods = [
    {
      key: 'linkedin',
      label: 'PROFESSIONAL NETWORK',
      badge: 'RECOMMENDED',
      badgeColor: 'bg-[#ffe500]',
      title: 'LinkedIn',
      value: 'linkedin.com/in/prathamesh-tirmare',
      displayValue: 'prathamesh-tirmare',
      subtext: 'Fastest way to connect for AI / Data Science engineering roles, collaborations, and discussions.',
      primaryAction: {
        label: 'Open LinkedIn Profile',
        href: 'https://www.linkedin.com/in/prathamesh-tirmare-52961028b/',
        icon: <FaLinkedin className="w-5 h-5 text-[#0077b5]" />,
        external: true,
      },
      secondaryAction: null,
    },
    {
      key: 'email',
      label: 'DIRECT INBOX',
      badge: 'PRIMARY',
      badgeColor: 'bg-[#ffe500]',
      title: 'Email',
      value: 'prathameshtirmare246@gmail.com',
      displayValue: 'prathameshtirmare246@gmail.com',
      subtext: 'Drop me a direct email anytime — I check my inbox daily and respond promptly.',
      primaryAction: {
        label: 'Send Email',
        href: 'mailto:prathameshtirmare246@gmail.com',
        icon: <Mail className="w-5 h-5 text-[#060504]" />,
        external: false,
      },
      secondaryAction: {
        label: 'Copy Email',
        copyText: 'prathameshtirmare246@gmail.com',
      },
    },
    {
      key: 'mobile',
      label: 'DIRECT CALL & CHAT',
      badge: 'AVAILABLE',
      badgeColor: 'bg-[#bbf7d0]',
      title: 'Mobile & WhatsApp',
      value: '+91 96992 46283',
      displayValue: '+91 96992 46283',
      subtext: 'Reach me directly via phone call, SMS, or WhatsApp for quick inquiries.',
      primaryAction: {
        label: 'Chat on WhatsApp',
        href: 'https://wa.me/919699246283',
        icon: <FaWhatsapp className="w-5 h-5 text-[#25D366]" />,
        external: true,
      },
      secondaryAction: {
        label: 'Call',
        href: 'tel:+919699246283',
        copyText: '+919699246283',
      },
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 sm:py-32 px-4 sm:px-8 max-w-6xl mx-auto scroll-mt-20"
    >
      {/* Top Header Row matching wireframe aesthetic */}
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between border-b-2 border-[#060504] pb-6 mb-12 gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffe500] sketch-border font-mono text-xs uppercase tracking-wider mb-3">
            <span className="w-2 h-2 rounded-full bg-[#060504] animate-pulse" />
            <span>Get in Touch</span>
          </div>
          <h2 className="font-caveat font-bold text-5xl sm:text-7xl text-[#060504] tracking-tight leading-tight">
            Let's make something.
          </h2>
          <p className="font-caveat text-2xl text-[#474747] mt-2 max-w-xl">
            Have an open role, project idea, or just want to chat? Reach out directly via LinkedIn, email, or mobile.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-[#fff9f5] px-4 py-2 sketch-border shrink-0">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
          <span className="font-mono text-xs uppercase tracking-wider text-[#060504]">
            Worli, Mumbai, IN
          </span>
        </div>
      </div>

      {/* 3 Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
        {contactMethods.map((method) => (
          <div
            key={method.key}
            className="group relative bg-[#fff9f5] sketch-border-thick sketch-shadow-lg p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:sketch-shadow-xl"
          >
            {/* Top Row: Category label & badge */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs tracking-wider text-[#7d766f]">
                  {method.label}
                </span>
                <span className={`font-mono text-[11px] font-bold px-2 py-0.5 sketch-border ${method.badgeColor} text-[#060504]`}>
                  {method.badge}
                </span>
              </div>

              {/* Title & Icon */}
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-sm bg-[#f7f6f4] sketch-border flex items-center justify-center shrink-0">
                  {method.primaryAction.icon}
                </div>
                <h3 className="font-caveat text-3xl sm:text-4xl font-bold text-[#060504]">
                  {method.title}
                </h3>
              </div>

              {/* Contact Value */}
              <div className="bg-[#f7f6f4] sketch-border px-3 py-2 my-3 font-mono text-xs sm:text-sm text-[#060504] break-all select-all flex items-center justify-between gap-2">
                <span className="truncate">{method.displayValue}</span>
                <button
                  onClick={() => handleCopy(method.value, method.key)}
                  className="p-1 hover:bg-[#ffe500] rounded transition-colors text-[#060504] shrink-0"
                  title="Copy to clipboard"
                  aria-label="Copy to clipboard"
                >
                  {copiedKey === method.key ? (
                    <Check className="w-4 h-4 text-emerald-600" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#060504]" />
                  )}
                </button>
              </div>

              {/* Subtext description */}
              <p className="font-caveat text-xl text-[#59534c] leading-snug">
                {method.subtext}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-6 mt-6 border-t border-[#060504]/15 flex flex-col gap-2">
              <a
                href={method.primaryAction.href}
                target={method.primaryAction.external ? '_blank' : undefined}
                rel={method.primaryAction.external ? 'noreferrer' : undefined}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-[#ffe500] sketch-border font-caveat text-2xl font-bold text-[#060504] hover:bg-[#ffea33] hover:scale-[1.02] active:scale-[0.99] transition-all no-underline shadow-xs"
              >
                <span>{method.primaryAction.label}</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>

              {method.secondaryAction && (
                <div className="flex items-center gap-2">
                  {method.secondaryAction.href && (
                    <a
                      href={method.secondaryAction.href}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#f7f6f4] sketch-border font-caveat text-xl font-bold text-[#060504] hover:bg-[#eceae6] transition-colors no-underline text-center"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>{method.secondaryAction.label}</span>
                    </a>
                  )}

                  {method.secondaryAction.copyText && (
                    <button
                      onClick={() => handleCopy(method.secondaryAction.copyText, `${method.key}-sec`)}
                      className="flex-1 flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#f7f6f4] sketch-border font-caveat text-xl font-bold text-[#060504] hover:bg-[#eceae6] transition-colors"
                    >
                      {copiedKey === `${method.key}-sec` ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700">Copied!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Quick Info & Social Footer Banner */}
      <div className="bg-[#fff9f5] sketch-border-thick sketch-shadow p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[#ffe500] sketch-border flex items-center justify-center font-caveat font-bold text-2xl text-[#060504] shrink-0">
            PT
          </div>
          <div>
            <h4 className="font-caveat font-bold text-3xl text-[#060504] leading-tight">
              Prathamesh Tirmare
            </h4>
            <p className="font-mono text-xs text-[#7d766f]">
              AI & Data Science Engineer ✦ B.E. AIDS , 2026
            </p>
          </div>
        </div>

        {/* Social Link Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://www.linkedin.com/in/prathamesh-tirmare-52961028b/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#f7f6f4] sketch-border font-caveat text-xl font-bold text-[#060504] hover:bg-[#ffe500] transition-colors no-underline"
          >
            <FaLinkedin className="w-4 h-4 text-[#0077b5]" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:prathameshtirmare246@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-[#f7f6f4] sketch-border font-caveat text-xl font-bold text-[#060504] hover:bg-[#ffe500] transition-colors no-underline"
          >
            <Mail className="w-4 h-4 text-[#060504]" />
            <span>Email</span>
          </a>

          <a
            href="tel:+919699246283"
            className="flex items-center gap-2 px-4 py-2 bg-[#f7f6f4] sketch-border font-caveat text-xl font-bold text-[#060504] hover:bg-[#ffe500] transition-colors no-underline"
          >
            <Phone className="w-4 h-4 text-[#060504]" />
            <span>+91 96992 46283</span>
          </a>

          <a
            href="https://github.com/Prathamesh-1705"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#f7f6f4] sketch-border font-caveat text-xl font-bold text-[#060504] hover:bg-[#ffe500] transition-colors no-underline"
          >
            <FaGithub className="w-4 h-4 text-[#060504]" />
            <span>GitHub</span>
          </a>
        </div>
      </div>

      {/* Bottom Footer signature */}
      <div className="flex flex-col sm:flex-row items-center justify-between border-t border-[#060504]/20 pt-6 text-center sm:text-left gap-4">
        <p className="font-caveat text-2xl text-[#060504]">
          © {new Date().getFullYear()} Prathamesh Tirmare. Built with React & Tailwind.
        </p>

        <p className="font-mono text-xs text-[#7d766f]">
          Worli, Mumbai, Maharashtra, India ✦ Available for Roles
        </p>
      </div>
    </section>
  );
}
