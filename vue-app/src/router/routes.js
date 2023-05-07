// import TaskPage from "../pages/TaskPage.vue"
import TaskPage from "../pages/TaskPage.vue"
import AddTaskPage from "../pages/AddTaskPage.vue"
import TestPage from "../pages/TestPage.vue"
import szfuPaymentPage from "../pages/szfuPaymentPage.vue"
// import LoginPage from "../pages/LoginPage.vue"
// import RegisterPage from "../pages/RegisterPage.vue"
// import SummaryPage from "../pages/SummaryPage.vue"
// import NotFoundErrorPage from "../pages/errors/NotFoundErrorPage.vue"
// import DataTablePage from "../pages/DataTablePage.vue"

const routes = [
    {
        path: "/tasks",
        component: TaskPage,
        name: 'tasks',
    },
    {
        path: "/tasks/add",
        component: AddTaskPage,
        name: 'addTasks',
    },
    {
        path: "/test",
        component: TestPage,
        name: 'test',
    },
    {
        path: "/tasks/szfuPayment",
        component: szfuPaymentPage,
        name: 'szfuPayment',
    },
]

export default routes