import Image from "next/image";

export default function Profile() {
  const name = "yunqi";
  const tagline = "Curious builder & learner";
  const bio = "Passionate about technology, design, and creating meaningful digital experiences. Always exploring new ideas.";

  const links = [
    {
      name: "X / Twitter",
      url: "https://x.com/yq123669",
      icon: "𝕏",
    },
    {
      name: "GitHub",
      url: "https://github.com/abc123669",
      icon: "🐙",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans flex items-center justify-center p-6">
      <div className="max-w-md w-full space-y-12 text-center">
        {/* Avatar */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-zinc-700 to-zinc-900 flex items-center justify-center text-6xl border border-zinc-800">
            👤
          </div>
        </div>

        {/* Name & Title */}
        <div className="space-y-3">
          <h1 className="text-5xl font-semibold tracking-tighter">{name}</h1>
          <p className="text-xl text-zinc-400">{tagline}</p>
        </div>

        {/* Bio */}
        <p className="text-zinc-400 leading-relaxed max-w-xs mx-auto">
          {bio}
        </p>

        {/* Social Links */}
        <div className="space-y-4 pt-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-3 w-full py-4 px-6 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-2xl transition-all duration-200 text-lg font-medium"
            >
              <span className="text-2xl transition-transform group-hover:scale-110">{link.icon}</span>
              <span>{link.name}</span>
            </a>
          ))}
        </div>

        {/* Footer */}
        <div className="pt-8 text-xs text-zinc-500">
          Built with Next.js + Tailwind • Deployed on Vercel
        </div>
      </div>
    </div>
  );
}
