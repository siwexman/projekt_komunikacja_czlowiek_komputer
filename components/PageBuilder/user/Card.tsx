import { Element, useNode } from '@craftjs/core';

import Button from './Button';
import Container, {
    ContainerDefaultProps,
    ContainerSettings,
} from './Container';
import Text from './Text';
import { ReactNode } from 'react';

export function CardTop({ children }: { children: ReactNode }) {
    const {
        connectors: { connect },
    } = useNode();

    return <div ref={connect}>{children}</div>;
}

CardTop.craft = {
    rules: {
        // Only accept Text
        canMoveIn: incomingNodes =>
            incomingNodes.every(
                incomingNode => incomingNode.data.type === Text
            ),
    },
};

export function CardBottom({ children }: { children: ReactNode }) {
    const {
        connectors: { connect },
    } = useNode();
    return <div ref={connect}>{children}</div>;
}

CardBottom.craft = {
    rules: {
        // Only accept Buttons
        canMoveIn: incomingNodes =>
            incomingNodes.every(
                incomingNode => incomingNode.data.type === Button
            ),
    },
};

export default function Card() {
    return (
        <Container background="#fff" padding={8}>
            <Element id="text" is={CardTop} canvas>
                <Text text="Title" fontSize={20} />
                <Text text="Subtitle" fontSize={15} />
            </Element>
            <Element id="buttons" is={CardBottom} canvas>
                <Button>Learn more</Button>
            </Element>
        </Container>
    );
}

Card.craft = {
    props: ContainerDefaultProps,
    related: {
        settings: ContainerSettings,
    },
};
