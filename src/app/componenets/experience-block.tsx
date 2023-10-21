import Image from "next/image";

interface ExperienceInfo {
  name: string;
  title: string;
  imageUrl: string;
  dates: string;
  description?: string[];
}

export default function ExperienceBlock(props: ExperienceInfo) {

  return (
    <div className="flex mb-8">
      <div className="relative w-12 flex-shrink-0 text-left content-start">
        <Image src={props.imageUrl} style={{objectFit: 'contain'}} width={90} height={90} alt={props.name} />
      </div>
      <div className="flex flex-col ml-4">
        <div className="">
          <span className="text-lg font-semibold leading-snug">{props.name}</span>
          <span className="border rounded-md text-xs px-2 py-0 align-text-top border-gray-300 bg-gray-300 text-gray-600 inline-block ml-2 font-mono">
            {props.dates}
          </span>
        </div>
        <div className="text-sm leading-snug">
          {props.title}
        </div>
        <p className="text-sm text-gray-600 mt-2" dangerouslySetInnerHTML={{__html: props.description?.join('<br/>') || ''}}></p>
      </div>
    </div>
  );
}
