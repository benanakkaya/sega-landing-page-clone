import React from "react";

const Footer = () => {

    
  const linkGroups = [
    {
      title: "USEFUL LINKS",
      links: [
        {
          id: 1,
          name: "Support",
        },
        {
          id: 2,
          name: "EULA",
        },
        {
          id: 3,
          name: "Cookie Policy",
        },
        {
          id: 4,
          name: "Site Terms",
        },
        {
          id: 5,
          name: "Privacy Policy",
        },
        {
          id: 6,
          name: "FAQs and Contact Us",
        },
      ],
    },
    {
      title: "BRANDS",
      links: [
        {
          id: 1,
          name: "Sonic the Hedgehog™",
        },
        {
          id: 2,
          name: "Samba de Amigo™",
        },
        {
          id: 3,
          name: "Total War™",
        },
        {
          id: 4,
          name: "Like a Dragon™",
        },
        {
          id: 5,
          name: "Company of Heroes™",
        },
        {
          id: 6,
          name: "Persona",
        },
        {
          id: 7,
          name: "Two Point™",
        },
        {
          id: 8,
          name: "Football Manager™",
        },
        {
          id: 9,
          name: "HYENAS",
        },
        {
          id: 10,
          name: "Endless Dungeon™",
        },
        {
          id: 11,
          name: "Humankind™",
        },
        {
          id: 12,
          name: "Super Monkey Ball™",
        },
        {
          id: 13,
          name: "Shin Megami Tensei",
        },
        {
          id: 14,
          name: "Bayonetta™",
        },
        {
          id: 15,
          name: "Hatsune Miku™",
        },
        {
          id: 16,
          name: "Shenmue™",
        },
        {
          id: 17,
          name: "Valkyria Chronicles™",
        },
        {
          id: 18,
          name: "Alien Isolation™",
        },
        {
          id: 19,
          name: "Dawn of War™",
        },
        {
          id: 20,
          name: "Endless Space™",
        },
        {
          id: 21,
          name: "Vanquish™",
        },
      ],
    },
    {
      title: "STORES",
      links: [
        {
          id: 1,
          name: "SEGA Merchandise Store",
        },
      ],
    },
    {
      title: "CORPORATE GOVERNANCE",
      links: [
        {
          id: 1,
          name: "Modern Slavery Statement",
        },
        {
          id: 2,
          name: "UK Tax Strategy",
        },
        {
          id: 3,
          name: "Gender Pay Gap Reporting",
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 156 51.01"
          width={160}
          height={52}
        >
          <path
            fill="#fff"
            d="M126.42.09c-5.53 0-10.219 3.32-12.109 7.88l-4.84 14.48L109.45.82H86.16c-4.21 0-7.999 1.65-10.778 4.37l.01-4.36H51.538c-4.44 0-8.478 1.901-11.309 4.891V.811L17.72.84C8.02.83.06 8.43.05 18.49c0 4.67 2.03 8.879 5.02 12.01H0V51h22.66c6.36 0 12.67-3.862 14.85-8.472l.07-.189c2.53 5.13 7.82 8.67 13.93 8.67h23.82l.01-4.44c2.8 2.74 6.63 4.42 10.859 4.42l66.97.01-14.63-43.119c-1.97-4.57-6.58-7.79-12.12-7.79z"
          />
          <path
            fill="#00337e"
            d="M126.49 3.62c-4.35 0-8 2.7-9.09 6.38l-11.45 33.711V19.18l-16.96.01v5.65h11.311v16.95h-14.15c-3.51 0-6.35-2.93-6.33-6.4V16.31c-.02-3.48 2.83-6.33 6.34-6.33l19.789.02V4.33H86.1c-6.63 0-12.01 5.38-11.94 12.01v19.08c-.07 6.63 5.351 12.01 11.98 12.01l18.544.01-.004.01h5.951l12.28-36.29a3.75 3.75 0 0 1 3.56-2.57c1.66 0 3.01 1.01 3.51 2.5l10.389 30.7h-16.44v5.66h24.27L135.583 10c-1.1-3.68-4.75-6.38-9.09-6.38zm-108.85.71c-7.81 0-14.141 6.33-14.141 14.141s6.33 14.148 14.15 14.148h4.93a.69.69 0 0 1 0 1.38l-19.08.02v5.65h19.1c3.51 0 6.361-2.849 6.361-6.359s-2.851-6.36-6.361-6.36h-4.96c-4.68 0-8.48-3.8-8.48-8.48s3.8-8.48 8.48-8.48h19.07l-.011-5.66H17.639zm33.85 0c-6.63 0-12.001 5.38-11.961 12v19.09c0 6.63 5.38 12.01 12.01 12.01l20.262.01-.012-5.65L51.4 41.8c-3.31 0-6.21-3.01-6.21-5.4l-.01-20.061c0-3.51 2.849-6.36 6.359-6.36l20.25.01V4.33H51.49zm74.98 6.4c-.74 0-1.37.51-1.55 1.2l-11.99 35.52h6.679l4.295-12.715.015 5.006h13.53l-9.43-27.811c-.18-.69-.8-1.2-1.55-1.2zM17.64 12.1a6.365 6.365 0 0 0-6.361 6.36c0 3.51 2.851 6.36 6.361 6.36h4.959c4.68 0 8.48 3.8 8.48 8.48s-3.8 8.48-8.48 8.48l-19.1.009v5.682l19.1-.01c7.81 0 14.15-6.33 14.15-14.15 0-7.81-6.33-14.15-14.15-14.15l-4.959.02c-.4 0-.72-.32-.72-.72 0-.4.32-.72.72-.72l19.059.02.012-5.65-19.07-.01zm33.898.01a4.224 4.224 0 0 0-4.228 4.23h-.01v8.49h20.299v-5.66h-14.71s.02-1.41 1.43-1.41H71.8v-5.65H51.537zm34.621 0c-2.33 0-4.23 1.89-4.23 4.23v19.09h.01c0 2.33 1.89 4.23 4.23 4.23l12.029.02V26.95h-9.2v5.65h3.54v1.42l-3.54-.01c-.78 0-1.41-.63-1.41-1.41l-.01-13.43s-.049-1.42 1.401-1.41h16.98v-5.65H86.158zm-38.85 14.84v8.511c0 2.33 1.9 4.209 4.24 4.209h20.238l.012-5.66h-17.48s-1.41 0-1.43-1.41h14.72v-5.65h-20.3zm79.17.16 2.11 6.29h-4.235l2.125-6.29z"
          />
          <path
            fill="#fff"
            d="M148.32 0c-4.23 0-7.67 3.44-7.67 7.67 0 2.05.8 3.98 2.25 5.43s3.37 2.25 5.42 2.25 3.98-.8 5.43-2.25S156 9.72 156 7.67s-.8-3.98-2.25-5.43A7.664 7.664 0 0 0 148.32 0zm0 1.07c1.76 0 3.42.69 4.67 1.93a6.557 6.557 0 0 1 1.93 4.67 6.606 6.606 0 0 1-11.27 4.67 6.564 6.564 0 0 1-1.93-4.67c0-1.76.69-3.42 1.93-4.67a6.557 6.557 0 0 1 4.67-1.93zm-3.08 2.35v8.52h1.11V8.31h2.2l2.31 3.62h1.35l-2.39-3.69c.41-.07 2.01-.35 2.01-2.34 0-.78-.26-1.49-.89-1.96-.66-.51-1.36-.51-2.54-.52h-3.16zm1.11.95h2.189c.65 0 1.2-.01 1.65.36.49.4.51.97.51 1.19 0 .62-.279 1.19-1.059 1.38-.34.08-.68.08-1.04.08h-2.25V4.37z"
          />
        </svg>
        <div className="footer-bottom">
          <div className="footer-text">
            <p>
              ©SEGA. All Rights Reserved. SEGA and the SEGA logo are either
              registered trademarks or trademarks of SEGA CORPORATION. SEGA is
              registered in the U.S. Patent and Trademark Office. All other
              trademarks, logos and copyrights are property of their respective
              owners.
            </p>
            <p>
              Sega Europe Limited. Company number 01669057. Registered office:
              27 Great West Road, Brentford, Middlesex TW8 9BW, United Kingdom.
            </p>
            <p>
              This site does not serve any cookies and so a cookie notice is not
              provided.
            </p>
          </div>
          <div className="footer-link-groups">
            {linkGroups.map((group) => (
              <div className="link-group">
                <strong className="group-title">{group.title}</strong>
                <div className="footer-links">
                {group.links.map(link => (
                    <a href="/#" className="footer-link">{link.name}</a>
                ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
