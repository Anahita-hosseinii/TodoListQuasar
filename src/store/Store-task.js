const state= {
    tasks: [
        { id: 1, name: "task1", completed: false, time: "5min", date: "2022/10/03" },
        { id: 2, name: "task2", completed: false, time: "5min", date: "2022/10/03" },
        { id: 3, name: "task3", completed: false, time: "5min", date: "2022/10/03" },
        { id: 4, name: "task4", completed: false, time: "5min", date: "2022/10/03" }
      ]

}
const mutation ={

}
const action ={

}
const getters={
 tasks: state => state.tasks
}
export default {
    namespaced:true,
    state,
    mutation,
    action,
    getters
}