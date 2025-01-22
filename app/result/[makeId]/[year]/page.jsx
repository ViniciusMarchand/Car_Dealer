import { api } from "@/api";
import VehicleCard from "@/components/VehicleCard";

export async function generateStaticParams() {
    const makes = (await api.getMakes()).data.Results;

    const years = Array.from({ length: 11 }, (_, i) => i + 2015);

    const paths = makes.flatMap((make) =>
        years.map((year) => ({
            makeId: make.MakeId.toString(),
            year: year.toString(),
        }))
    );

    return paths;
}

export default async function Page({ params }) {
    const { makeId, year } = await params;

    let cars;
    
    cars = await api.search(makeId, year);

    console.warn(cars.data.Results)


    if (!cars) {
        return { notFound: true };
    }

    return (
        <>
            <div className="flex flex-wrap gap-5">
                {cars.data.Results.map((car) => (
                    <VehicleCard key={car.Model_ID} vehicle={car} />    
                ))}
            </div>
        </>
    );
}
