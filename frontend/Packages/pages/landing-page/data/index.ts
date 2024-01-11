import { wontonsItemType,dipItemType } from "@zocom/types";


export const useData = ()=> {
    const HOST = import.meta.env.VITE_HOST; 
    return {
        async getWontonsMenu(): Promise<wontonsItemType[] | void > {
            try {
                const res = await fetch( HOST + '/api/menu/wontons')
                const data = await res.json()
                return data.Items
            } catch (error ) {
               console.log(error);
            }
        },
        async getDipsMenu(): Promise<dipItemType[] | void > {
            try {
                const res = await fetch( HOST + '/api/menu/dips')
                const data = await res.json()
                return data.Items
            } catch (error) {
                console.log(error);
                
            }
        },

    }
}