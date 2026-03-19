import Link from "next/link";
import { Button, Icons } from "@repo/ui";

export default function Page() {
  return (
    <>
      <section className="pt-21.5">
        <div className="mx-auto max-w-380 px-3 md:px-4">
          <div className="flex flex-col gap-6">
            <h1 className="font-neutral-sans leading-auto leading-12.4 max-w-180 text-[42px] md:text-[54px] md:leading-16.75">
              The readable web platform documentation
            </h1>
            <p className="max-w-156">
              Learn the web platform from first principles :: core technologies and frameworks, weird CSS, and
              advanced rendering with WebGL/WebGPU
            </p>
            <div className="flex items-center gap-3">
              <Link href="/learn/">
                <Button>Start Learning</Button>
              </Link>
              <a target="_blank" href="https://github.com/frontendpages/frontendpages" rel="noreferrer">
                <Button variant={"outline"}>
                  <Icons.GitHub className="size-4" />
                  Contribute
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
