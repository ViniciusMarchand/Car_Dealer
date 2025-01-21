import CardLayout from "./CardLayout";

export default function VehicleCard({ vehicle }) {
    const { Make_Id, Make_Name, Model_ID, Model_Name} = vehicle
    return (
        <CardLayout>
            <div className="w-[250px] px-[20px] min-h-[80px] py-[10px] flex-col gap-y-3">
                <div className="ring-1 ring-secondary shadow-md rounded-lg text-center mb-5 mt-3">
                    <span>Make: </span><span className="text-secondary"> {Make_Name}</span>
                </div>

                <div className="ring-1 ring-secondary shadow-md rounded-lg text-center mb-3">
                    <span>Model: </span><span className="text-secondary"> {Model_Name}</span>
                </div>

            </div>
        </CardLayout>
    )
}
