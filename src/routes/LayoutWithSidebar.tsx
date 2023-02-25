import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { LayoutWithSidebarContainer, PageContainer } from "./style";

export function LayoutWithSidebar() {
  return (
    <LayoutWithSidebarContainer>
      <Sidebar />
      <PageContainer>
        <Outlet />
      </PageContainer>
    </LayoutWithSidebarContainer>
  )
}