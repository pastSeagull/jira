import styled from "@emotion/styled";
import { ButtonNoPadding, Row } from "components/lib";
import { ReactComponent as SoftwareLogo } from "assets/software-logo.svg";
import { useAuth } from "context/auto-context";
import { ProjectListScreen } from "screens/project-list";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { ProjectScreen } from "screens/project";
import { ProjectPopover } from "components/project-popover";
import { UserPopover } from "components/user-popover";
import { Button, Dropdown, Menu } from "antd";
import { ProjectModal } from "screens/project-list/project-modal";
import { useEffect } from "react";
import { resetRoute } from "utils";

export const AuthentictedApp = () => {
  let navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    location.search !== ""
      ? navigate("/prjects" + location.search)
      : navigate("/prjects");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <PageHeader />
      <Main>
        <Routes>
          <Route path={"/prjects"} element={<ProjectListScreen />}></Route>
          <Route
            path={"/prjects/:projectId/*"}
            element={<ProjectScreen />}
          ></Route>
        </Routes>
      </Main>
      <ProjectModal />
    </Container>
  );
};

const PageHeader = () => {
  return (
    <Header between={true}>
      <HeaderLeft gap={true}>
        <ButtonNoPadding type={"link"}>
          <Button type="link" onClick={resetRoute}>
            <SoftwareLogo width={"18rem"} color={"rgb(38, 132, 255)"} />
          </Button>
        </ButtonNoPadding>
        <ProjectPopover />
        <UserPopover />
      </HeaderLeft>
      <HeaderRight>
        <User />
      </HeaderRight>
    </Header>
  );
};

const User = () => {
  const { logout, user } = useAuth();
  return (
    <Dropdown
      overlay={
        <Menu>
          <Menu.Item key={"logout"}>
            <Button onClick={logout} type={"link"}>
              ??????
            </Button>
          </Menu.Item>
        </Menu>
      }
    >
      <Button type="link" onClick={(e) => e.preventDefault()}>
        Hi, {user?.name}
      </Button>
    </Dropdown>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr;
  height: 100vh;
`;

const Header = styled(Row)`
  padding: 3.2rem;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  display: flex;
  overflow: hidden;
`;
