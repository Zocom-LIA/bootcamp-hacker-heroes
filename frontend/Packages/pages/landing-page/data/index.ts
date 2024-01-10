import { menu } from "@zocom/types";


export const useData = ()=> {
    const HOST = (import.meta as any).env.VITE_HOST;
    return {
        async getMenu(): Promise<any | void > {
            try {
                const res = await fetch( HOST + '/api/menu/dips')
                const data = await res.json()
                return data
            } catch (error) {
                console.log(error);
                
            }
        }
    }
}