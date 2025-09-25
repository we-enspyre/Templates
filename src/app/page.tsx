export default function Home() {
  const iframeLinks = [
    "https://wp-themes.com/astra/",
    "https://wp-themes.com/education-formula/",
    "https://fse.catchthemes.com/kiddiemart/",
    "https://roblogdemo.wordpress.com/?demo",
    "https://demo.themeisle.com/neve/",
    "https://demo.themeisle.com/hestia/",
    "https://demo.themeisle.com/shopisle/",
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-300 h-[50px] flex items-center justify-center">
        <img src="/logo-light.png" alt="Logo" className="h-20" />
      </header>
      <main className="flex-1 flex flex-col items-center justify-center py-8">
        <div className="flex flex-col items-center gap-4">
          {iframeLinks.map((src, idx) => (
            <iframe
              key={idx}
              src={src}
              style={{ width: "75vw", height: "46vh" }}
              className="giphy-embed"
              allowFullScreen
            ></iframe>
          ))}
        </div>
      </main>
      <footer className="bg-gray-300 h-[50px] flex items-center justify-center"></footer>
    </div>
  );
}
