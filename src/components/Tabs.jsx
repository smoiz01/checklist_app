export default function Tabs(props) {
    const {todos, selectedTab, setSelectedTab} = props
    const tabs = ['All', 'Active', 'Completed']
    
    return (
        <nav className="tab-container">
            
            {tabs.map((tab, index) => {
                const numOfTasks = tab === 'All' ? todos.length : 
                tab === 'Active' ? todos.filter(todo => todo.completed === false).length :
                todos.filter(todo => todo.completed === true).length

                return (
                    <button 
                    key={index} 
                    className={"tab-button " + (tab === selectedTab ? ' tab-selected' : ' ')}
                    onClick={() => setSelectedTab(tab)}>
                        <h4>{tab} ({numOfTasks})</h4>
                    </button>
                )
            })}
            <hr />
        </nav>
    )
}