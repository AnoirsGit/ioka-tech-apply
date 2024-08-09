import React, { useEffect, useState } from "react";
import "./navHeader.scss";
import { Icon } from "@iconify/react";
import Switch from "react-switch";
import { NavLink, useLocation } from "react-router-dom";
import { ROUTES } from "../../shared/lib/routes/routes";
import usePagination from "../../shared/lib/hooks/pagination/usePagination";

function NavHeader() {
  const [isCyclicPagination, setIsCyclicPagination] = useState<boolean>(true);
  const [canNavigateBack, setCanNavigateBack] = useState(true);
  const [canNavigateBackTwice, setCanNavigateBackTwice] = useState(true);
  const [canNavigateForward, setCanNavigateForward] = useState(true);
  const [canNavigateForwardTwice, setCanNavigateForwardTwice] = useState(true);
  const {
    canNavigate,
    navigateBack,
    navigateBackTwice,
    navigateForward,
    navigateForwardTwice,
  } = usePagination({isCyclical: isCyclicPagination});
  const location = useLocation();

  useEffect(() => {
    setCanNavigateBack(canNavigate(-1));
    setCanNavigateBackTwice(canNavigate(-2));
    setCanNavigateForward(canNavigate(1));
    setCanNavigateForwardTwice(canNavigate(2));
  }, [location, isCyclicPagination, canNavigate]);

  const togglePaginationMode = () => {
    setIsCyclicPagination(!isCyclicPagination);
  };

  return (
    <header className="header-wrapper">
      <nav className="header-navigation">
        <div className="history-wrapper">
          <div className="">
            <button onClick={navigateBackTwice} className="header-nav-icon" disabled={!canNavigateBackTwice}>
              <Icon icon="mdi:chevron-double-left" />
            </button>
            <button onClick={navigateBack} className="header-nav-icon" disabled={!canNavigateBack}>
              <Icon icon="mdi:chevron-left" />
            </button>
          </div>

          <div className="">
            <button onClick={navigateForward} className="header-nav-icon" disabled={!canNavigateForward}>
              <Icon icon="mdi:chevron-right" />
            </button>
            <button onClick={navigateForwardTwice} className="header-nav-icon" disabled={!canNavigateForwardTwice}>
              <Icon icon="mdi:chevron-double-right" />
            </button>
          </div>
        </div>

        <div className="pages-nav-items-wrapper">
          {ROUTES.map(({ path, name }, index) => (
            <NavLink key={index} to={path} className="header-nav-item">
              {name}
            </NavLink>
          ))}
        </div>

        <div className="pagination-mode-wrapper">
          <span>Pagination mode</span>
          <Switch
            checked={isCyclicPagination}
            onColor="#9122FF"
            offColor="#6600cc"
            checkedIcon={
              <div className="switch-icon">
                <Icon icon="dashicons:update" />
              </div>
            }
            onChange={togglePaginationMode}
          />
          {isCyclicPagination ? "loop" : "normal"}
        </div>
      </nav>
    </header>
  );
}

export default NavHeader;
