import React from "react";

const Home = () => {
  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <section className="w-11/12 h-5/6 grid grid-rows-1 grid-cols-3 border border-gray-200 shadow-2xl">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LtLOV7jZlPNSbFsGm5a73NI3vrGoKcNADw&s"
          className="h-full"
          alt="man with thumbs up"
        />
        <div className="col-span-2">
          <h3 className="p-4 text-2xl text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </h3>
        </div>
      </section>
    </main>
  );
};

export default Home;
