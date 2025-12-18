import { Icons } from "@repo/ui";

export default function Page() {
  return (
    <>
      <header className="py-12">
        <div className="mx-auto max-w-400 px-3">
          <div className="space-y-3 text-center">
            <div className="flex flex-col items-center justify-center gap-8">
              <Icons.Logo width={100} height={100} />
              <h1 className="font-krylon text-8xl">Frontendpages</h1>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
