import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Tools Directory",
  description: "A curated collection of the best AI tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <header className="bg-white shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🤖</span>
              <h1 className="text-xl font-bold text-gray-900">AI Tools Directory</h1>
            </div>
            <div className="flex gap-6">
              <a href="/" className="text-gray-600 hover:text-primary">Home</a>
              <a href="/tools" className="text-gray-600 hover:text-primary">Tools</a>
              <a href="/categories" className="text-gray-600 hover:text-primary">Categories</a>
              <a href="/submit" className="text-gray-600 hover:text-primary">Submit</a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-900 text-white py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p>© 2026 AI Tools Directory. Built with Next.js + Supabase</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
