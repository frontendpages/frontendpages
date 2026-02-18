import { Icons } from "@repo/ui";

export default function Page() {
  return (
    <>
      <header className="py-12">
        <div className="mx-auto max-w-400 px-3">
          <div className="space-y-3 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <Icons.Logo width={100} height={100} />
              <h1 className="font-krylon text-6xl">Frontend Pages</h1>
            </div>
          </div>
        </div>
      </header>
      <div>
        <SocialIcons />
      </div>
    </>
  );
}

function SocialIcons() {
  return (
    <>
      <div className="flex justify-center gap-3">
        <a href={"https://x.com/intent/follow?screen_name=frontendpages"} target="_blank" rel="noreferrer">
          <Icons.X className="hover:opacity-80" />
        </a>
        <a href={"https://www.instagram.com/frontendpages/"} target="_blank" rel="noreferrer">
          <Icons.Instagram className="hover:opacity-80" />
        </a>
      </div>
    </>
  );
}
