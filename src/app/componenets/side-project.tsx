import Image from "next/image";
import Link from "next/link";

interface SideProjectInfo {
  name: string;
  website: string;
  imageUrl: string;
  description: string;
}

export default function SideProject(props: SideProjectInfo) {

  return (
    <div className="flex mb-4">
      <div className="relative content-start w-16 flex-shrink-0">
        <Image className="rounded-lg" src={props.imageUrl} style={{objectFit: 'contain'}} width="120" height="120" alt={props.name} />
      </div>
      <div className="ml-4">
        <div className="text-lg font-semibold leading-snug">
          <Link href={props.website} target="_blank" className="flex items-center text-gray-500 hover:text-gray-900">
            <span className="text-gray-900">{props.name}</span>
            <svg className="w-4 h-4 inline-block ml-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
        </div>
        <p className="text-sm">
          {props.description}
        </p>
      </div>
    </div>
  );
}
