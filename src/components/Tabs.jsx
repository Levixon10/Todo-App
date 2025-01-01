import React from 'react'

const Tabs = (props) => {
    const tabs=["All","Open","Completed"]
    const {todos ,selectedTab, setSelectedTab}=props
  return (
    <nav>
        {tabs.map((tab,tabindex)=>{
            const numoftasks= tab=='All' ? todos.length :
            tab=='Open' ? todos.filter(val => !val.complete).length : todos.filter(val => val.complete).length


            return(
                <button onClick={()=>
                {
                    setSelectedTab(tab)
                }
                } key={tabindex} className={"tab-button"+ (tab==selectedTab ? 'tab-selected' : ' ')}>
                    <h4>
                        {tab} <span>({numoftasks})</span>
                    </h4>
                </button>
            )
        })}
        <hr />
    </nav>
  )
}

export default Tabs