import Image from "next/image";

interface ExperienceInfo {
  name: string;
  title: string;
  imageUrl: string;
  dates: string;
  description?: string;
}

export default function ExperienceBlock(props: ExperienceInfo) {

  return (
    <div className="flex mb-8">
      <div className="">
        <Image src={props.imageUrl} width="48" height="48" alt={props.name} />
      </div>
      <div className="flex flex-col ml-4">
        <div className="">
          <span className="text-lg font-semibold leading-snug">{props.name}</span>
          <span className="border rounded-md text-xs px-2 py-0 align-text-top border-gray-300 bg-gray-300 text-grey-500 inline-block ml-2 font-mono">
            {props.dates}
          </span>
        </div>
        <div className="text-sm leading-snug">
          {props.title}
        </div>
        <p className="text-sm text-gray-600 mt-2">
          {props.description}
        </p>
      </div>
    </div>
  );
}
