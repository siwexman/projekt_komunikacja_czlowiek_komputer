import dynamic from 'next/dynamic';

const BlocklyEditor = dynamic(
    () => import('@/components/BlocklyEditor/BlocklyEditor'),
    {
        ssr: false,
    }
);

export default function page() {
    return <BlocklyEditor />;
}
