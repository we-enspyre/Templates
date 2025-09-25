"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const iframeLinks = [
    { name: "Hestia", src: "https://demo.themeisle.com/hestia/" },
    { name: "Roblog", src: "https://roblogdemo.wordpress.com/?demo" },
    { name: "Pizza Template", src: "https://we-enspyre.github.io/PizzaTemplate/" },
    { name: "Astra", src: "https://wp-themes.com/astra/" },
    { name: "Sham United", src: "https://www.sham-united.com/" },
    { name: "BT Template", src: "https://we-enspyre.github.io/BT/" },
    { name: "Education Formula", src: "https://wp-themes.com/education-formula/" },
    { name: "Kiddiemart", src: "https://fse.catchthemes.com/kiddiemart/" },
    { name: "Fotograf", src: "https://we-enspyre.github.io/fotograf/" },
    { name: "Sydney", src: "https://athemes.com/theme/sydney/" },
  ];

  const [activeIframe, setActiveIframe] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeIframe ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActiveIframe(null);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIframe]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-black-300 h-[50px] flex items-center justify-center">
        <img src="/logo-light.png" alt="Logo" className="h-16" />
      </header>
      
      <main className="flex-1 flex flex-col items-center py-8 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {iframeLinks.map((item, idx) => (
            <div
              key={idx}
              className="relative bg-white rounded-xl shadow-md overflow-hidden w-[calc(100%+20px)] group"
            >
              {/* interactive iframe */}
              <iframe
                title={item.name}
                src={item.src}
                className="w-full h-100"
                allowFullScreen
              />
              
              {/* Centered Preview button, visible only on hover */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIframe(item.src);
                }}
                aria-label={`Preview ${item.name}`}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/90 text-black px-4 py-2 rounded-md shadow-md font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200"
              >
                Preview
              </button>
              
              <div className="p-2 text-center font-medium text-black">
                {item.name}
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Overlay */}
      {activeIframe && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setActiveIframe(null)}
        >
          <div
            className="relative w-[90vw] h-[90vh] bg-white rounded-xl shadow-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveIframe(null)}
              className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-md z-20"
              aria-label="Close preview"
            >
              ✕
            </button>
            <iframe
              title="Full preview"
              src={activeIframe}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        </div>
      )}
      
      <footer className="bg-gray-300 h-[50px] flex items-center justify-center"></footer>
    </div>
  );
}