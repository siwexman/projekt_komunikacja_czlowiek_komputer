import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useNode } from '@craftjs/core';
import { useState } from 'react';
import ContentEditable from 'react-contenteditable';

export default function Text({
    text,
    // style,
    fontSize,
    textAlign,
}: {
    text: string;
    // style: React.CSSProperties;
    fontSize: number;
    textAlign?: string;
}) {
    const {
        connectors: { connect, drag },
        isActive,
        actions: { setProp },
    } = useNode(node => ({
        isActive: node.events.selected,
    }));

    const [editable, setEditable] = useState(false);

    return (
        <div ref={ref => connect(drag(ref!))} onClick={e => setEditable(true)}>
            <ContentEditable
                disabled={!editable}
                html={text}
                onChange={e =>
                    setProp(
                        props =>
                            (props.text = e.target.value.replace(
                                /<\/?[^>]+(>|$)/g,
                                ''
                            ))
                    )
                }
                tagName="p"
                style={{ fontSize: fontSize + 'px' }}
            />
        </div>
    );
}

function TextSettings() {
    const {
        actions: { setProp },
        fontSize,
    } = useNode(node => ({ fontSize: node.data.props.fontSize }));

    return (
        <>
            <form>
                <Label className="py-2">Font size: {fontSize}</Label>
                <Slider
                    defaultValue={[fontSize]}
                    step={1}
                    min={7}
                    max={50}
                    onValueChange={value =>
                        setProp(props => (props.fontSize = value))
                    }
                />
            </form>
        </>
    );
}

Text.craft = {
    props: {
        text: 'Hi',
        fontSize: 20,
    },
    related: {
        settings: TextSettings,
    },
};
