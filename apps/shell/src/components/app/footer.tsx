import { Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>© {currentYear} Flagster. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by</span>
            <a
              href="https://www.linkedin.com/in/jimmybastos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors font-medium"
            >
              JimmyBastos
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
