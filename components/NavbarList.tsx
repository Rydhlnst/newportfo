"use client";

import { Button } from "@/components/ui/button";
import { useHash } from "@/lib/useHash";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function NavbarList() {
  const activeHash = useHash();

  return (
    <nav className="flex items-center space-x-4 p-4">
      {navItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <Button
            variant="link"
            className={activeHash === item.href.replace("#", "") ? "text-primary font-semibold" : "text-muted-foreground"}
            onClick={() => (window.location.hash = item.href)}
          >
            {item.name}
          </Button>
          {index < navItems.length - 1 && (
            <div className="h-0"/>
          )}
        </div>
      ))}
    </nav>
  );
}
