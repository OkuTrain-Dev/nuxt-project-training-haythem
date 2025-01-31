import {useNowRouteTitle, useRouteDefine} from "~/composables/useRouteParams";

export default defineNuxtRouteMiddleware((to, from) => {
    const route = useRouteDefine()
    const routeName = useNowRouteTitle()

    routeName.value = route.value.find(item => item.path === to.path)?.name || ''
})
