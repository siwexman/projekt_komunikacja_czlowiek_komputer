'use client';

import { Editor } from '@craftjs/core';
import { Layers } from '@craftjs/layers';

export default function CraftWeb() {
    return (
        <div className="mx-auto w-[800px]">
            <Editor>
                <Layers />
            </Editor>
        </div>
    );
}
