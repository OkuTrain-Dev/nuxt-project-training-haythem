export interface RouterItem {
    path: string,
    name: string,
    icon?: string
}

export const useNowRouteTitle = () => {
    return useState<string>('nowRouteTitle', () => '')
}

export const useRouteDefine = () => {
    return useState<RouterItem[]>('routeDefine', () => [
        {name: '首页', path: '/', icon: "HomeFilled"},
        {name: '计数器', path: '/counter', icon: "Odometer"},
        {name: '收藏列表', path: '/collections', icon: "Star"},
        {name: '登陆', path: '/auth', icon: "Key"}
    ])
}
