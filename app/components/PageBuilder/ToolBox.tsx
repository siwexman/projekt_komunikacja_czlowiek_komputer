import { Element, useEditor } from '@craftjs/core';
import {
    Bold,
    Camera,
    LayoutGrid,
    Puzzle,
    SquareMinus,
    SquareMousePointer,
    Video,
} from 'lucide-react';

import ToolBoxButton from './ToolBoxButton';
import Button from './user/Button';
import Text from './user/Text';
import Container from './user/Container';
import Card from './user/Card';
import SettingsPanel from './SettingsPanel';

export default function ToolBox() {
    const { connectors, query } = useEditor();

    return (
        <div className="bg-white relative py-4 col-span-2 border border-[#2E8BED]">
            <div className="border-b border-[#2E8BED] p-2">
                <p className="font-bold text-2xl text-center p-2">Add Block</p>
            </div>
            <div className="flex flex-col justify-between px-2">
                <div className="grid grid-cols-1 gap-4 py-6">
                    <button
                        ref={ref =>
                            connectors.create(
                                ref,
                                <Text fontSize={16} text="Hi world" />
                            )
                        }
                    >
                        <ToolBoxButton text="Text" svg={<Bold />} />
                    </button>
                    {/* <button>
                        <ToolBoxButton text="Image" svg={<Camera />} />
                    </button> */}
                    <button
                        ref={ref =>
                            connectors.create(ref, <Button>Click me</Button>)
                        }
                    >
                        <ToolBoxButton
                            text="Button"
                            svg={<SquareMousePointer />}
                        />
                    </button>
                    {/* <button>
                        <ToolBoxButton text="Video" svg={<Video />} />
                    </button> */}
                    <button ref={ref => connectors.create(ref, <Card />)}>
                        <ToolBoxButton text="Card" svg={<SquareMinus />} />
                    </button>
                    <button
                        ref={ref =>
                            connectors.create(
                                ref,
                                <Element is={Container} canvas>
                                    {undefined}
                                </Element>
                            )
                        }
                    >
                        <ToolBoxButton text="Container" svg={<LayoutGrid />} />
                    </button>
                    {/* <ToolBoxButton text="More" svg={<Bold />} /> */}
                    <SettingsPanel />
                </div>
                <ToolBoxButton text="Add Block Programming" svg={<Puzzle />} />
            </div>
        </div>
    );
}
