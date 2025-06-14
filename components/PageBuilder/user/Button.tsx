import { Label } from '@/components/ui/label';
import { RadioGroup } from '@/components/ui/radio-group';
import { useNode } from '@craftjs/core';
import { RadioGroupItem } from '@/components/ui/radio-group';
import { ReactNode } from 'react';

const sizeStyles = {
    small: { fontSize: 12, padding: 8 },
    medium: { fontSize: 16, padding: 16 },
    large: { fontSize: 20, padding: 24 },
};

export default function Button({
    children,
    size,
}: {
    children?: ReactNode;
    size: 'small' | 'medium' | 'large';
}) {
    const {
        connectors: { connect, drag },
    } = useNode();

    const style = sizeStyles[size];

    return (
        <button
            style={style}
            ref={ref => connect(drag(ref!))}
            className="p-4 rounded-2xl bg-[#2E8BED] text-white font-semibold"
        >
            {children}
        </button>
    );
}

function ButtonSettings() {
    const {
        actions: { setProp },
        props,
    } = useNode(node => ({ props: node.data.props }));

    return (
        <div>
            <form>
                <Label htmlFor="radio_size" className="py-2">
                    Size:
                </Label>
                <RadioGroup
                    defaultValue={props.size}
                    name="radio_size"
                    onChange={e =>
                        setProp(props => (props.size = e.target.value))
                    }
                >
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="small" id="size_one" />
                        <Label htmlFor="size_one">Small</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="medium" id="size_two" />
                        <Label htmlFor="size_two">Medium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="large" id="size_three" />
                        <Label htmlFor="size_three">Large</Label>
                    </div>
                </RadioGroup>
            </form>
        </div>
    );
}

Button.craft = {
    props: {
        size: 'small',
        text: 'Click me',
    },
    related: {
        settings: ButtonSettings,
    },
};
