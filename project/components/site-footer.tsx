import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react"

import { siteConfig } from "@/lib/constants"

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background py-8 md:py-12">
      <div className="container flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text-xl font-bold">
              {siteConfig.name}
            </Link>
            <p className="text-muted-foreground max-w-xs">
              {siteConfig.description}
            </p>
            <div className="flex gap-4 mt-2">
              {siteConfig.socialLinks.map((link) => (
                <Link key={link.name} href={link.href} className="text-foreground/60 hover:text-foreground">
                  {link.name === "Twitter" && <Twitter className="h-5 w-5" />}
                  {link.name === "Facebook" && <Facebook className="h-5 w-5" />}
                  {link.name === "Instagram" && <Instagram className="h-5 w-5" />}
                  {link.name === "LinkedIn" && <Linkedin className="h-5 w-5" />}
                </Link>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {siteConfig.footerLinks.map((group) => (
              <div key={group.title} className="flex flex-col gap-2">
                <h3 className="font-medium">{group.title}</h3>
                <ul className="flex flex-col gap-2">
                  {group.links.map((link) => (
                    <li key={link.title}>
                      <Link href={link.href} className="text-foreground/60 hover:text-foreground">
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between gap-4 text-sm text-muted-foreground border-t pt-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-foreground">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}