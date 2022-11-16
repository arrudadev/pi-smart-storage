export const LoginFooter = () => {
  return (
    <footer className="absolute bottom-10 w-full">
      <div className="container mx-auto">
        <hr className="my-6 border-gray-700" />

        <div className="px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-white font-semibold py-1">
                Copyright © {new Date().getFullYear()} Smart Storage.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
