import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Instagram } from "lucide-react";
import Image from "next/image";

type SocialLink = {
  name: string;
  href: string;
  icon: keyof typeof iconMap;
  preview?: {
    avatar?: string;
    title: string;
    username: string;
    description?: string;
  };
};

const iconMap = {
  linkedin: <Linkedin />,
  github: <Github />,
  instagram: <Instagram />,
  mail: <Mail />,
};

type Props = {
  links: SocialLink[];
};

export function SocialLinkCard({ links }: Props) {
  return (
    <div className="flex gap-4">
      {links.map(({ name, href, icon, preview }) => (
        <HoverCard key={name}>
          <HoverCardTrigger asChild>
            <Button asChild variant="ghost" className="hover:bg-accent p-2">
              <a href={href} target="_blank" rel="noopener noreferrer" title={name}>
                {iconMap[icon]}
              </a>
            </Button>
          </HoverCardTrigger>
          {preview && (
            <HoverCardContent className="w-64">
              <div className="flex items-center gap-4">
                {preview.avatar && (
                  <Image
                    src={preview.avatar}
                    alt="Avatar"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <div>
                  <h4 className="text-sm font-semibold">{preview.title}</h4>
                  <p className="text-xs text-muted-foreground">@{preview.username}</p>
                </div>
              </div>
              {preview.description && (
                <p className="mt-2 text-sm">{preview.description}</p>
              )}
            </HoverCardContent>
          )}
        </HoverCard>
      ))}
    </div>
  );
}
