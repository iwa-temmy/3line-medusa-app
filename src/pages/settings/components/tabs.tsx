const Tabs = ({
  tabList,
  activeTab,
  onTabClick,
}: {
  tabList: string[];
  activeTab: string;
  onTabClick: (tab: string) => void;
}) => {
  return (
    <section className="border border-gray-300 w-fit rounded-lg">
      {tabList.map((tab) => (
        <button
          key={tab}
          className={`px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 border-r border-gray-300 last:border-r-0 last:rounded-r-lg first:rounded-l-lg ${
            activeTab === tab ? "bg-gray-200" : ""
          }`}
          onClick={() => onTabClick(tab)}
        >
          {tab}
        </button>
      ))}
    </section>
  );
};

export default Tabs;
