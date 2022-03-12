import React, { useState, useMemo, useEffect } from 'react'

type TabOption = {
  key: string;
  name: string;
  children: JSX.Element
}

type Props = {
  tabs: TabOption[];
}

const Tabs = ({ tabs }: Props) => {
  const [selectedTab, setSelectedTab] = useState(tabs?.[0]?.key);

  const tab = useMemo(() => {
    return tabs.find(({ key }) => key === selectedTab)
  }, [tabs, selectedTab])

  return (
    <div className="w-full">
      <div className="w-full flex">
        {
          tabs.map(({ name, key }) => (
            <div
              className={`w-full cursor-pointer text-center border-b-2 ${selectedTab === key ? 'border-black font-medium' : 'font-thin'} hover:border-black hover:font-medium`}
              onClick={() => setSelectedTab(key)}
              key={key}
            >
              {name}
            </div>
          ))
        }
      </div>
      <div className="mt-2 w-full">
        {tab.children}
      </div>
    </div>
  )
}

export default Tabs
