import { useEditor } from '@craftjs/core';
import React from 'react';

export default function SettingsPanel() {
    const { actions, selected } = useEditor((state, query) => {
        const [currentNodeId] = state.events.selected;

        let selected;

        if (currentNodeId) {
            selected = {
                id: currentNodeId,
                name: state.nodes[currentNodeId].data.name,
                settings:
                    state.nodes[currentNodeId].related &&
                    state.nodes[currentNodeId].related.settings,
                isDeletable: query.node(currentNodeId).isDeletable(),
            };
        }

        return {
            selected,
        };
    });

    return (
        selected && (
            <div className="bg-gray-100 p-2">
                <div>
                    <div className="flex justify-between">
                        <div>Selected:</div>
                        <div className="px-2 py-1 bg-slate-500 rounded">
                            {selected.name}
                        </div>
                    </div>
                    {selected.settings &&
                        React.createElement(selected.settings)}
                    {selected.isDeletable && (
                        <button
                            onClick={() => actions.delete(selected.id)}
                            className="p-2 bg-gray-400 rounded-sm"
                        >
                            Delete
                        </button>
                    )}
                </div>
            </div>
        )
    );
}
