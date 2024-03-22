import PieChart from "./chart/PieChart"


const Reports = () => {
    return (
        <section className="w-full flex flex-col gap-6 pb-24">
            <h1 className="md:text-4xl text-2xl text-white font-fira">Realtime Reports</h1>

            {/* Realtime Reports 1 */}
            <main className="w-full flex gap-4 h-[350px] md:p-6 p-4 bg-bodyLight rounded-lg border border-myPurple/50">
                <div className="flex-1 flex flex-col">

                </div>
                <div className="flex-1">
                    <PieChart />
                </div>
            </main>
        </section>
    )
}

export default Reports