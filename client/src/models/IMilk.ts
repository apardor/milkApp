export interface IMilk {
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