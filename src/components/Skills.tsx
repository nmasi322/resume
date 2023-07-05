const Skills = () => {
  return (
    <div>
      <div>
        <h1 className="text-lg mb-2">Programming Languages</h1>
        <p>Python</p>
        <p>Javascript</p>
        <p>Typescript</p>
        <p>Solidity</p>
      </div>
      <div>
        <h1 className="my-4 text-lg">Frameworks and Tools</h1>
        <div className="flex items-center max-xs:justify-between sm:space-x-20">
          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>Tailwind CSS</p>
            <p>React</p>
          </div>
          <div>
            <p>Next.Js</p>
            <p>React Native</p>
            <p>Node.Js</p>
            <p>Express.Js</p>
          </div>
          <div>
            <p>MongoDB</p>
            <p>Git & Github</p>
            <p>Ethers.Js</p>
            <p>Web3.Js</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
