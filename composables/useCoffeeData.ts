export interface coffeeItem {
    id?: number,
    brand: string,
    name: string,
    minCaffeine: number,
    maxCaffeine: number,
}

export interface tableLabelDefine {
    key: string,
    name: string,
    width?: string
}

export const useCoffeeDataTableLabel = () => {
    return useState<tableLabelDefine[]>('coffeeDataTableLabel', () => [
        {key: 'brand', name: '品牌', width: "200"},
        {key: 'name', name: '名称', width: "120"},
        {key: 'minCaffeine', name: '最小咖啡因', width: "120"},
        {key: 'maxCaffeine', name: '最大咖啡因', width: "120"},
    ])
}

export const useCoffeeData = () => {
    return useState<coffeeItem[]>('coffeeData', () => [
        {id: 0, brand: 'AIRBAG COFFEE', name: '美式咖啡', minCaffeine: 388, maxCaffeine: 388},
        {id: 1, brand: 'AIRBAG COFFEE', name: '香草拿铁', minCaffeine: 116.1, maxCaffeine: 116.1},
        {id: 2, brand: 'AIRBAG COFFEE', name: '拿铁', minCaffeine: 117.94, maxCaffeine: 117.94},
        {id: 3, brand: 'COSTA 咖啡', name: '香草拿铁', minCaffeine: 103.66, maxCaffeine: 103.66},
        {id: 4, brand: 'COSTA 咖啡', name: '拿铁', minCaffeine: 107.58, maxCaffeine: 107.58},
        {id: 5, brand: 'COSTA 咖啡', name: '美式咖啡', minCaffeine: 188.73, maxCaffeine: 188.73},
        {id: 6, brand: 'COSTA 咖啡', name: '卡摩', minCaffeine: 190, maxCaffeine: 395},
        {id: 7, brand: 'COSTA 咖啡', name: '卡布奇诺', minCaffeine: 185, maxCaffeine: 370},
        {id: 8, brand: 'COSTA 咖啡', name: '澳白', minCaffeine: 92, maxCaffeine: 277},
        {id: 9, brand: 'COSTA 咖啡', name: '告尔多咖啡', minCaffeine: 185, maxCaffeine: 370},
        {id: 10, brand: 'M Stand', name: '拿铁', minCaffeine: 185, maxCaffeine: 200},
        {id: 11, brand: 'M Stand', name: '澳白', minCaffeine: 185, maxCaffeine: 185},
        {id: 12, brand: 'M Stand', name: '美式', minCaffeine: 185, maxCaffeine: 200},
        {id: 13, brand: 'M Stand', name: '伯爵拿铁', minCaffeine: 185, maxCaffeine: 200},
    ])
}
