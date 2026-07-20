import Link from "next/link";
import { Icons } from "@repo/ui/components/icons";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@repo/ui/components/sheet";
import { LogoContextMenu } from "@/components/logo-context-menu";
import Container from "@/components/container";
import { Signature } from "@/components/graphics/signature";
import { ColorStripes } from "@/components/graphics/color-stripes";
import ThreeDotLines from "@/components/graphics/three-dot-lines";
import { RevealText } from "@/components/reveal-text";

function Byline() {
  return (
    <div className="flex items-center gap-2">
      Project by
      <div className="flex items-center gap-2">
        <Icons.Powenel className="size-6" />
        <a href="https://powenel.com/?ref=frontendpages.com" target="_blank">
          <p className="font-stacksans-headline text-sm text-black">Powenel</p>
        </a>
      </div>
    </div>
  );
}

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
                    <SheetTitle className={"text-2xl"}>Why?</SheetTitle>
                    <SheetDescription>
                      Stop guessing how great interfaces are built.
                    </SheetDescription>

                    <div className="flex flex-col">
                      <div className="space-y-4 self-stretch text-left text-[#808080]">
                        <RevealText delay={0.1}>
                          have you ever looked at a beautiful website or an open source project and
                          wondered, "how did they build that?" instead of recreating toy examples,
                          we'll break down real interfaces piece by piece, from a simple button to
                          complex, state-driven and interaction-heavy experiences, so you understand
                          every decision behind them.
                        </RevealText>
                        <RevealText delay={0.3}>
                          if you want to learn by dissecting the web instead of memorizing it, join
                          the waitlist and get early access to frontendpages.
                        </RevealText>
                      </div>
                      <div className="mt-8">
                        <Byline />
                      </div>
                    </div>
                  </SheetHeader>
                  <SheetFooter className="relative px-0 py-3">
                    <div>
                      <ThreeDotLines className="absolute bottom-10 left-0 z-50 overflow-x-hidden" />
                      <div className="relative inset-x-0 z-20 flex justify-center">
                        <ColorStripes className="translate-y-6" />
                      </div>
                      <div className="relative z-30 flex justify-end bg-white p-4">
                        <Signature />
                      </div>
                    </div>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
