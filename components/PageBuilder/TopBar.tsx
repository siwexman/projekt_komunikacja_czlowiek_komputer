import { useEditor } from '@craftjs/core';
import { Check, CornerUpLeft, CornerUpRight } from 'lucide-react';
import { useState } from 'react';
import lz from 'lzutf8';
import copy from 'copy-to-clipboard';
import {
    Dialog,
    DialogHeader,
    DialogTitle,
    DialogContent,
    DialogDescription,
    DialogTrigger,
    DialogFooter,
    DialogClose,
} from '@/components/ui/dialog';
import { toast } from 'sonner';

export default function TopBar() {
    const { actions, query, enabled } = useEditor(state => ({
        enabled: state.options.enabled,
    }));

    const [dialogOpen, setDialogOpen] = useState(false);
    const [stateToLoad, setStateToLoad] = useState('');

    function handleCopyStateClick() {
        const json = query.serialize();
        copy(lz.encodeBase64(lz.compress(json)));
        toast('State copied to clipboard');
    }

    function handleLoadStateClick() {
        setDialogOpen(false);
        const json = lz.decompress(lz.decodeBase64(stateToLoad));
        actions.deserialize(json);
        toast('State loaded');
    }

    return (
        <div className="bg-[#9E9E9E] px-4 py-2 flex justify-between">
            <div className="flex gap-2 my-auto">
                <CornerUpLeft />
                <CornerUpRight />
            </div>
            <div className="flex gap-2">
                <button
                    onClick={handleCopyStateClick}
                    className="bg-[#559C68] px-4 py-1.5 flex gap-1 rounded text-white"
                >
                    <Check />
                    <p>Finish Editing</p>
                </button>
                <Dialog open={dialogOpen}>
                    <DialogTrigger asChild>
                        <button
                            onClick={() => setDialogOpen(true)}
                            className="border border-[#cacaaa] px-4 py-1.5 rounded text-[#cacaaa]"
                        >
                            <p>Load</p>
                        </button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Load state</DialogTitle>
                            <DialogDescription>
                                Paste the content copied from current state
                            </DialogDescription>
                        </DialogHeader>
                        <div>
                            <input
                                className="border border-[#000] rounded w-3/4 p-1"
                                onChange={e => setStateToLoad(e.target.value)}
                            />
                        </div>
                        <DialogFooter
                            style={{ justifyContent: 'space-between' }}
                        >
                            <DialogTrigger>
                                <button
                                    onClick={handleLoadStateClick}
                                    className="border border-[#000] p-2 rounded-lg"
                                >
                                    Load
                                </button>
                            </DialogTrigger>
                            <DialogClose
                                asChild
                                onClick={() => setDialogOpen(false)}
                            >
                                <button type="button">Cancel</button>
                            </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}
