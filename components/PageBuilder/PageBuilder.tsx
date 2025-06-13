'use client';

import { Editor, Frame, Element } from '@craftjs/core';

import ToolBox from './ToolBox';
import TopBar from './TopBar';

import Button from './user/Button';
import Card, { CardBottom, CardTop } from './user/Card';
import Container from './user/Container';
import Text from './user/Text';

export default function PageBuilder() {
    return (
        <Editor
            resolver={{ Card, Button, Text, Container, CardTop, CardBottom }}
        >
            <div className="w-full h-full grid grid-cols-8 grid-rows-1">
                <ToolBox />
                <div className="bg-[#C7C7C7] col-span-6 flex flex-col gap-2">
                    <TopBar />
                    <div className="p-4 w-full h-full">
                        <div className="bg-white p-8 h-full">
                            <Frame>
                                <Element is={Container} canvas>
                                    <Card />
                                    <Button>Click</Button>
                                    <Text text="Hi world" fontSize={16} />
                                    <Element is={Container} canvas>
                                        <Text
                                            text="It's me again!"
                                            fontSize={20}
                                        />
                                    </Element>
                                </Element>
                            </Frame>
                        </div>
                    </div>
                </div>
            </div>
        </Editor>
    );
}
