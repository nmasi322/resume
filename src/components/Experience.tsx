interface ExperienceProps {
  company: string;
  location: string;
  startTime: string;
  endTime: string;
  position: string;
  duties: string[];
}

const Experience = ({
  company,
  location,
  startTime,
  endTime,
  position,
  duties,
}: ExperienceProps) => {
  return (
    <div className="py-5 border-b-2 border-b-gray-400">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl">{company}</h1>
          <h2 className="text-gray-500 text-lg max-xs:text-base">{position}</h2>
        </div>
        <div className="text-right">
          <h1 className="text-lg">{location}</h1>
          <h2 className="text-gray-500 text-lg italic max-xs:text-base">
            {startTime} - {endTime}
          </h2>
        </div>
      </div>
      <div className="mt-3 space-y-1 px-2 md:px-4">
        {duties.map((duty: string, index: number) => {
          return (
            <div key={index}>
              <li className="md:max-w-[85%]">{duty}</li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
