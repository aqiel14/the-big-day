// components/Footer.tsx
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t">
      <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between text-center text-sm text-muted-foreground">
        <div className="mb-2 sm:mb-0">
          © {new Date().getFullYear()} Made with 💖 by The Big Day
        </div>
        <Separator orientation="vertical" className="hidden sm:block h-4 mx-4" />
        <div className="flex gap-4">
          <a href="#rsvp" className="hover:underline">RSVP</a>
          <a href="#location" className="hover:underline">Location</a>
          <a href="#gallery" className="hover:underline">Gallery</a>
        </div>
      </div>
    </footer>
  );
}