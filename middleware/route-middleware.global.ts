import {useNowRouteTitle, useRouteDefine} from "~/composables/useRouteParams";

export default defineNuxtRouteMiddleware((to, from) => {
    const route = useRouteDefine()
    const routeName = useNowRouteTitle()
    const routeIcon = useNowRouteIcon()

    routeName.value = route.value.find(item => item.path === to.path)?.name || ''
    routeIcon.value = route.value.find(item => item.path === to.path)?.icon || ''
})
