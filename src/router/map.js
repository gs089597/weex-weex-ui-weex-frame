import route from './page'

export default [
    {
        path: '/',
        redirect: {
            path: route.main.path
        }
    },
    {
        title: route.main.title,
        path: route.main.path,
        component: route.main.component
    },
    {
        title: route.aaa.title,
        path: route.aaa.path,
        component: route.aaa.component
    },
    {
        title: route.web.title,
        path: route.web.path,
        component: route.web.component
    },
    {
        title: '404',
        path: '*',
        component: require('@/views/404/app')
    }
]
