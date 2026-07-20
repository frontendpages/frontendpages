import Link from "next/link";
import { Icons } from "@repo/ui/components/icons";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@repo/ui/components/sheet";
import { LogoContextMenu } from "@/components/logo-context-menu";
import Container from "@/components/container";

export function Header() {
  return (
    <header className="py-5">
      <Container>
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-4">
            <LogoContextMenu logo={<Icons.Logo />} />
            <p className="font-neutral-sans text-[24px] select-none">Frontend Pages</p>
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <Sheet>
                <SheetTrigger>Why?</SheetTrigger>

                <SheetContent className="overflow-y-auto">
                  <SheetHeader className="space-y-3">
                    <SheetTitle>Why learn frontend if AI can generate code?</SheetTitle>

                    <div className="space-y-4 text-left">
                      <p>
                        AI is becoming excellent at generating code, but it still depends on someone
                        who knows what to build, what looks good, and what creates a great user
                        experience.
                      </p>

                      <p>
                        Frontend development is more than writing components. It involves design,
                        layout, accessibility, motion, typography, performance, interaction, and
                        countless decisions that require taste and judgment.
                      </p>

                      <p>
                        The best developers don't compete with AI. They use it as a tool to move
                        faster while focusing on solving problems, crafting polished interfaces, and
                        making better decisions.
                      </p>

                      <p>
                        Learning frontend isn't about memorizing syntax anymore. It's about
                        developing the skills that AI cannot reliably automate: understanding users,
                        recognizing quality, and building products people love to use.
                      </p>
                    </div>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
