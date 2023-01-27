export interface IMilk {
    _id: string;
    name: string;
    type: string;
    storage: number;
    id: string;
}

export interface IState{
    loading: boolean,
    count: number,
    results: IMilk[],
    errorMsg: string,
}

export interface IMilkFilter{
    filter: string,
    type: string,
}

export interface IPaginationProps{
    resultsPerPage: number,
    totalResults: number,
    setCurrentPage: any,
}

export interface IPageNumbers{
    pageNumbers: number[],
}

export enum milkType{
    cashew= "Cashew milk",
    pea =  "Pea milk",
    walnut = "Walnut milk",
    rice = "Rice milk",
    coconut = "Coconut milk",
    soy = "Soy milk",
    hemp ="Hemp milk",
    oat = "Oat milk",
    macadamia = "Macadamia milk",
    whole = "Whole milk",
}



  