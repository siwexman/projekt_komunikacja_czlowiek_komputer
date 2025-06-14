'use client';

// import * as Blockly from 'blockly/core';
import { BlocklyWorkspace, Workspace } from 'react-blockly';
import { useState } from 'react';
import 'blockly/blocks';
import * as Blockly from 'blockly/javascript';
import { Toolbox } from './Toolbox';

export default function BlocklyEditor() {
    const [xml, setXml] = useState('');

    function handleWorkspaceChange(workspace: Workspace) {
        const code = Blockly.javascriptGenerator.workspaceToCode(workspace);
        console.log('Generated Code:', code);
    }

    return (
        <div style={{ width: '100%', height: '100%' }} className="flex-1">
            <BlocklyWorkspace
                className="h-full"
                toolboxConfiguration={Toolbox}
                initialXml={xml}
                onXmlChange={setXml}
                onWorkspaceChange={handleWorkspaceChange}
                workspaceConfiguration={{}}
            />
        </div>
    );
}
