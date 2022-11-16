export const HomeFooter = () => {
  return (
    <footer className="container mx-auto relative w-full pt-12 pb-6">
      <hr className="my-6 border-blueGray-300" />

      <div className="px-4">
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © {new Date().getFullYear()} Smart Storage.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
