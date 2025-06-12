import { ReactNode } from 'react';

export default function ToolBoxButton({
    text,
    svg,
}: {
    text: string;
    svg: ReactNode;
}) {
    return (
        <div className="flex gap-2 justify-center p-4 border border-[#CACACA] rounded-3xl text-xl">
            <div className="my-auto">{svg}</div>
            <p className="my-auto">{text}</p>
        </div>
    );
}
