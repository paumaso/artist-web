interface Props {
    label: string;
    value: React.ReactNode
}

export default function FichaItem({ label, value }: Props) {
    return (
        <p>
            <span className="text-stone-400 block text-xs uppercase tracking-wider">
                {label}
            </span>
            {value}
        </p>
    );
}