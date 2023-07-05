const Project = () => {
  return (
    <div className="py-5 border-b-2 border-b-gray-400">
      <div className="mb-6">
        <div>
          <h1 className="text-xl">
            <a
              className="text-black font-medium no-underline"
              href="https://github.com/nmasi322/cli-blockchain-rust"
            >
              CLI Blockchain 🔗
            </a>
          </h1>
        </div>
        <div className="mt-2 px-2">
          <p>
            Developed a blockchain application using Rust. The application
            allows users to mine, transfer, receive, and airdrop tokens all from
            the CLI.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-xl">
            <a
              className="text-black font-medium no-underline"
              href="https://github.com/iyosayi-dexter/Velo"
            >
              Velo 🔗
            </a>
          </h1>
        </div>
        <div className="mt-2 px-2">
          <p>
            Developed an interactive app/website that connects not only
            University students across Africa but specifically coursemates.
            <p>
              It helps reduce the stress of going to google to search for
              questions where you'll find different answers some of which may
              not be correct or match what you're looking for. Velo also has a
              chat feature that combines learning with fun.
            </p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;
