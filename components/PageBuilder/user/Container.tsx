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
    children: ReactNode;
    background: string;
    padding: number;
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
                <Label htmlFor="colorPicker">Background</Label>
                <HexColorPicker
                    id="colorPicker"
                    color={background || '#000'}
                    onChange={color =>
                        setProp(props => (props.background = color))
                    }
                />
            </form>
            <form>
                <Label htmlFor="paddingPicker">Padding</Label>
                <Slider
                    id="paddingPicker"
                    defaultValue={padding}
                    onValueChange={value =>
                        setProp(props => (props.padding = value))
                    }
                />
            </form>
        </div>
    );
}

export const ContainerDefaultProps = {
    background: '#ffffff',
    padding: 4,
};

Container.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
    },
};
