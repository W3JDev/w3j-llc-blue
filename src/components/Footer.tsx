import { Separator } from '@/components/ui/separator';
import { Marquee } from '@/components/ui/marquee';
const services = [
  "Full Stack Development",
  "AI Integration",
  "Backend Systems",
  "LangChain Solutions",
  "Enterprise Applications",
  "Technology Consulting",
];
export function Footer() {
  return (
    <footer className="bg-secondary/50 dark:bg-background border-t">
      <div className="w-full">
        <Marquee pauseOnHover className="text-sm text-muted-foreground [--duration:60s]">
          {services.map((service) => (
            <span key={service} className="mx-4">
              {service}
            </span>
          ))}
        </Marquee>
      </div>
      <Separator />
      <div className="container mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row">
          <div className="text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} W3J LLC. EIN: 37-2188653. All rights reserved.</p>
            <p>Licensed Technology Consulting Services.</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <Separator orientation="vertical" className="h-4" />
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
        <div className="mt-6 text-center text-xs text-muted-foreground/70">
          <p>Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}