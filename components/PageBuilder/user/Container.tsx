import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { useNode } from '@craftjs/core';
import { ReactNode } from 'react';
import { HexColorPicker } from 'react-colorful';

export default function Container({
    children,
    background = '#cacaca',
    padding = 16,
}: {
    children?: ReactNode;
    background?: string;
    padding?: number;
}) {
    const {
        connectors: { connect, drag },
    } = useNode();

    return (
        <div
            style={{ margin: '4px 0', background, padding: padding + 'px' }}
            className="rounded-sm"
            ref={ref => connect(drag(ref!))}
        >
            {children}
        </div>
    );
}

export function ContainerSettings() {
    const {
        background,
        padding,
        actions: { setProp },
    } = useNode(node => ({
        background: node.data.props.background,
        padding: node.data.props.padding,
    }));

    return (
        <div>
            <form>
                <Label htmlFor="colorPicker" className="py-2">
                    Background:{' '}
                    <input
                        defaultValue={background.slice(1)}
                        onChange={e =>
                            setProp(
                                props =>
                                    (props.background = '#' + e.target.value)
                            )
                        }
                    />
                </Label>
                <HexColorPicker
                    className="m-auto"
                    id="colorPicker"
                    color={background || '#000000'}
                    onChange={color =>
                        setProp(props => (props.background = color))
                    }
                />
            </form>
            <form>
                <Label htmlFor="paddingPicker" className="py-2">
                    Padding: {padding}
                </Label>
                <Slider
                    id="paddingPicker"
                    defaultValue={[padding]}
                    step={1}
                    min={0}
                    max={24}
                    onValueChange={value =>
                        setProp(props => (props.padding = value))
                    }
                />
                {/* <Slider
                    defaultValue={[fontSize]}
                    step={1}
                    min={7}
                    max={50}
                    onValueChange={value =>
                        setProp(props => (props.fontSize = value))
                    }
                /> */}
            </form>
        </div>
    );
}

export const ContainerDefaultProps = {
    background: '#cacaca',
    padding: 4,
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
    },
};
