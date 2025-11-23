"use client"

import { useState, type ReactNode } from "react"

interface Tab {
    label: string
    content: ReactNode
}

interface TabsProps {
    tabs: Tab[]
    defaultTab?: number
}

export function Tabs({ tabs, defaultTab = 0 }: TabsProps) {
    const [activeTab, setActiveTab] = useState(defaultTab)

    return (
        <div className="w-full">
            <div className="flex items-center gap-4 mb-6">
                <h2 className="text-2xl text-black dark:text-white">Proof of Work</h2>
            </div>
            {/* Tab Navigation */}
            <div className="border-b border-gray-200">
                <nav className="flex gap-8" aria-label="Tabs">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`
                relative pb-2 text-md font-medium transition-colors cursor-pointer
                ${activeTab === index ? "text-black dark:text-white" : "text-gray-500 hover:text-gray-700"}
              `}
                            aria-current={activeTab === index ? "page" : undefined}
                        >
                            {tab.label}
                            {/* Active indicator */}
                            {activeTab === index && <span className="absolute bottom-0 left-0 right-0 h-[3px] bg-black" />}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="pt-8">{tabs[activeTab].content}</div>
        </div>
    )
}
