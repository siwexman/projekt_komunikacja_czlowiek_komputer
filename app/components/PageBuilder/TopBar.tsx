import { Check, CornerUpLeft, CornerUpRight } from 'lucide-react';

export default function TopBar() {
    return (
        <div className="bg-[#9E9E9E] px-4 py-2 flex justify-between">
            <div className="flex gap-2 my-auto">
                <CornerUpLeft />
                <CornerUpRight />
            </div>
            <div>
                <div className="bg-[#559C68] px-4 py-1.5 flex gap-1 rounded text-white">
                    <Check />
                    <p>Finish Editing</p>
                </div>
            </div>
        </div>
    );
}
