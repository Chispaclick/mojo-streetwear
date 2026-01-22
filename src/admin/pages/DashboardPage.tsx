

export const DashboardPage = () => {
    return (
        <div className="min-h-screen bg-neutral-950 text-white p-20">


            {/* TÍTULO */}
            <header className="mb-8">
                <h1 className="text-2xl font-semibold tracking-tight">
                    Panel de control
                </h1>
                <p className="text-sm text-neutral-400">
                    Resumen general de tu tienda
                </p>
            </header>

            {/* MÉTRICAS */}
            <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                <DashboardCard title="Productos activos" value="12" />
                <DashboardCard title="Pedidos totales" value="38" />
                <DashboardCard title="Ingresos" value="1.245 €" />
                <DashboardCard title="Pendientes" value="4" />
            </section>

            {/* CONTENIDO */}
            <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                {/* Últimos pedidos */}
                <div className="lg:col-span-2 border border-neutral-800 rounded-xl p-6">
                    <h2 className="text-lg font-medium mb-4">
                        Últimos pedidos
                    </h2>

                    <div className="space-y-3 text-sm text-neutral-300">
                        <div className="flex justify-between">
                            <span>#1021 · Juan</span>
                            <span>39 €</span>
                        </div>
                        <div className="flex justify-between">
                            <span>#1020 · Ana</span>
                            <span>59 €</span>
                        </div>
                    </div>
                </div>

                {/* Stock bajo */}
                <div className="border border-neutral-800 rounded-xl p-6">
                    <h2 className="text-lg font-medium mb-4">
                        Stock bajo
                    </h2>

                    <ul className="space-y-3 text-sm text-neutral-300">
                        <li>Hoodie MOJO Black (2)</li>
                        <li>Tee Street White (1)</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

/* CARD */
const DashboardCard = ({ title, value }: { title: string; value: string }) => {
    return (
        <div className="border border-neutral-800 rounded-xl p-6">
            <p className="text-sm text-neutral-400 mb-2">{title}</p>
            <p className="text-2xl font-semibold">{value}</p>
        </div>
    );
};
