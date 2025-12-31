interface Props {
    title: string;
    value: string | number;
}

export const AdminCard = ({ title, value }: Props) => (
    <div className="bg-white p-4 rounded shadow text-center">
        <h3 className="text-gray-500">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
    </div>
);