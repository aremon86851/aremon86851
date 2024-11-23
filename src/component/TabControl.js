
import Skills from "./Skills/Skills";
import Project from "./Project/Project";
import Experience from "./Experiences/Experience";

const TabControl = ({activeTab,setActiveTab}) => {

  const tabs = [
    {
      id: 'skills',
      label: 'Skills',
      content: <Skills/>,
    },
    {
      id: 'projects',
      label: 'Projects',
      content: <Project/>,
    },
    {
      id: 'experiences',
      label: 'Experiences',
      content: <Experience/>,
    },
  ];

  return (
    <div >
      {/* Tabs */}
      <div className="tabs w-full gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab tab-lg tab-bordered ${
              activeTab === tab.id ? 'tab-active text-white bg-["rgb(87, 13, 248)"] leading-none' : 'bg-transparent text-white border leading-none'
            }`}
            onClick={() => setActiveTab(tab.id)}
            style={{borderColor : tab.id === activeTab ? "" : "rgb(87, 13, 248)"}}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {tabs.find((tab) => tab.id === activeTab)?.content}
      </div>
    </div>
  );
};

export default TabControl;