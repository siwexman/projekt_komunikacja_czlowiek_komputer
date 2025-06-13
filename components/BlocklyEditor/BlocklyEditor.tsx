'use client';

import Blockly from 'blockly';
import { useEffect, useRef } from 'react';

export default function BlocklyEditor() {
    const blocklyDiv = useRef<HTMLDivElement>(null);
    const toolboxContainerRef = useRef<HTMLDivElement>(null);
    const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

    useEffect(() => {
        if (!blocklyDiv.current || !toolboxContainerRef.current) {
            return;
        }

        const toolboxXml = new DOMParser().parseFromString(
            toolboxContainerRef.current.innerHTML,
            'text/xml'
        );

        workspaceRef.current = Blockly.inject(blocklyDiv.current, {
            toolbox: toolboxXml.documentElement,
        });

        return () => {
            workspaceRef.current?.dispose();
        };
    }, []);

    return (
        <div className="flex">
            <div ref={blocklyDiv} id="blocklyDiv" className=""></div>
            <div ref={toolboxContainerRef} id="toolbox" className="hidden">
                <block type="controls_if" />
            </div>
        </div>
    );
}
