import React from "react";
import TopHeader from "@/components/ui/top-header";
import ProtectedLayout from "@/protected-layout";
import Tabs from "./components/tabs";
import Role from "./components/roles";

const tabList = [
  "My details",
  "Profile",
  "Password",
  "Team",
  "Plan",
  "Roles",
  "Notifications",
  "Integrations",
  "API",
];

const ActiveTabContent = ({ activeTab }: { activeTab: string }) => {
  switch (activeTab) {
    case "Roles":
      return <Role />;
    default:
      return (
        <section>
          No available content for <strong>{activeTab}</strong> tab.
        </section>
      );
  }
};

const Settings = () => {
  const [activeTab, setActiveTab] = React.useState<string>("Roles");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <ProtectedLayout className="space-y-3">
      <TopHeader
        title="Settings"
        description="Manage your team and preferences here."
      />
      <Tabs
        tabList={tabList}
        activeTab={activeTab}
        onTabClick={handleTabClick}
      />
      <div className="pt-6">
        <ActiveTabContent activeTab={activeTab} />
      </div>
    </ProtectedLayout>
  );
};

export default Settings;
