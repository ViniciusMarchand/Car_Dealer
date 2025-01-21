import { Axios } from "./Axios";
export const api = {
    
    getMakes: async () => {
        const url = "/vehicles/GetMakesForVehicleType/car?format=json";
        return await Axios.get(url);
    },
    search: async (makeId, year) => {
        const url = `/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;
        return await Axios.get(url);
    }
}