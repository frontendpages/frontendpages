export function Banner() {
  return (
    <div className="sticky top-0 hidden flex-row items-center justify-center bg-black px-8 py-2 text-sm text-white md:flex dark:bg-white dark:text-black">
      <p>
        You can also access frontendpages.com via {""}
        <a href="https://frontend.page" className="font-bold hover:opacity-80">
          frontend.page
        </a>
      </p>
    </div>
  );
}
