export function Header(props){
    const { todos }=props
    const todosLength=todos.length
    const isTaskPlural=todosLength !=1
    const taskOrTasks= isTaskPlural? 'tasks' : 'task'
    return(
        <header className="text-gradient">
            <h1>You have {todosLength} open {taskOrTasks}.</h1>
            </header>
    )
}