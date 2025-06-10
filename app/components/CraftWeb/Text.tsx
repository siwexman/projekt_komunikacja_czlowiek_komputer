export default function Text({
    text,
    fontSize,
}: {
    text: string;
    fontSize: string;
}) {
    return (
        <div>
            <p style={{ fontSize }}>{text}</p>
        </div>
    );
}
