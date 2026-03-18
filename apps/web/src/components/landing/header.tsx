import Link from "next/link";
import { Button } from "@repo/ui";

export function Header() {
  return (
    <header className="py-5">
      <div className="mx-auto max-w-380 px-3 md:px-4">
        <div className="flex items-center justify-between">
          <Link href={"/"} className="flex items-center gap-4">
            <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="38" height="38" fill="black" />
              <path
                d="M26.6074 8.45459H12.9999L14.6473 19.0968L12.9834 30.8922H18.008L16.3276 19.4922L25.2565 21.0407L24.3669 17.2846L16.2947 18.4378L17.6785 9.50893L27.2334 12.9355L26.6074 8.45459Z"
                fill="white"
              />
            </svg>

            <p className="font-neutral-sans text-[24px] select-none">Frontend Pages</p>
          </Link>
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              <Button variant={"ghost"}>Learn</Button>
              <Button variant={"ghost"}>About</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
