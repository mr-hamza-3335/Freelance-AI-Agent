import Link from "next/link"
import { Github, Linkedin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card/50 backdrop-blur">
      <div className="container px-2 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {/* About Project */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">About Project</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Freelance AI Agent empowers freelancers with intelligent automation tools for client communication,
              proposal generation, and project management.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Quick Links</h3>
            <nav className="flex flex-col space-y-1">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/generator", label: "Generator" },
                { href: "/pricing", label: "Pricing" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Contact Info</h3>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-medium text-foreground">Ameer Hamza</p>
              <p>Email: ameerhamza94572@gmail.com</p>
              <p>Phone: 03252106239</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-primary">Social Links</h3>
            <div className="flex space-x-3">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink className="h-5 w-5" />
                <span className="sr-only">Portfolio</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-4 pt-4 border-t border-border/40">
          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Freelance AI Agent | Built by Ameer Hamza | Student at Governor Sindh House, Agentic AI</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
