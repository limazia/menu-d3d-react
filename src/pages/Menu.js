import { useState, useEffect, useCallback } from "react";

import { Home } from "~/components/Tabs/Home";
import { Aimbot } from "~/components/Tabs/Aimbot";
import { Visuals } from "~/components/Tabs/Visuals";
import { Miscellaneous } from "~/components/Tabs/Miscellaneous";
import { Configs } from "~/components/Tabs/Configs";
import { Scripts } from "~/components/Tabs/Scripts";
import { About } from "~/components/Tabs/About";

export function Menu() {
  const [menuShow, setMenuShow] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");

  const handleTab = (tab) => {
    setActiveTab(tab);
  };

  const handleKeyDown = useCallback(
    (event) => {
      if (event.key === "Insert") {
        setMenuShow(!menuShow);
      }
    },
    [menuShow]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const renderOutlet = (activeTab) => {
    switch (activeTab) {
      case "Home":
        return <Home />;
      case "Aimbot":
        return <Aimbot />;
      case "Visuals":
        return <Visuals />;
      case "Miscellaneous":
        return <Miscellaneous />;
      case "Configs":
        return <Configs />;
      case "Scripts":
        return <Scripts />;
      case "About":
        return <About />;
      default:
        return <Home />;
    }
  };

  return (
    menuShow && (
      <div className="container h-100">
        <div className="row h-100 justify-content-center align-items-center">
          <div className="col-md-9">
            <div className="card">
              <div className="card-header p-0">
                <div className="p-3 d-flex align-items-center justify-content-between">
                  <h3 className="logo mb-0">{process.env.REACT_APP_NAME || "Menu D3D"}</h3>
                  <i className="fas fa-expand-arrows text-muted"></i>
                </div>
              </div>
              <div className="card-body p-0">
                <div className="row">
                  <div className="col-md-4">
                    <div className="tabs">
                      <ul className="nav p-3">
                        <li
                          className={activeTab === "Home" ? "active" : ""}
                          onClick={() => handleTab("Home")}
                        >
                          <i className="fas fa-home"></i> Home
                        </li>
                        <li
                          className={activeTab === "Aimbot" ? "active" : ""}
                          onClick={() => handleTab("Aimbot")}
                        >
                          <i className="fas fa-crosshairs"></i> Aimbot
                        </li>
                        <li
                          className={activeTab === "Visuals" ? "active" : ""}
                          onClick={() => handleTab("Visuals")}
                        >
                          <i className="fas fa-eye"></i> Visuals
                        </li>
                        <li
                          className={
                            activeTab === "Miscellaneous" ? "active" : ""
                          }
                          onClick={() => handleTab("Miscellaneous")}
                        >
                          <i className="fas fa-sliders-h"></i> Miscellaneous
                        </li>
                        <li
                          className={activeTab === "Configs" ? "active" : ""}
                          onClick={() => handleTab("Configs")}
                        >
                          <i className="fas fa-cog"></i> Configs
                        </li>
                        <li
                          className={activeTab === "Scripts" ? "active" : ""}
                          onClick={() => handleTab("Scripts")}
                        >
                          <i className="fas fa-code"></i> Scripts
                        </li>
                        <li
                          className={activeTab === "About" ? "active" : ""}
                          onClick={() => handleTab("About")}
                        >
                          <i className="fas fa-info-circle"></i> About
                        </li>
                      </ul>

                      <div className="ml-3 p-3">
                        <div className="row d-flex align-items-center justify-content-between">
                          <div className="d-flex align-content-center">
                            <div className="user-avatar">
                              <i className="fas fa-user"></i>
                            </div>
                            <span className="d-flex flex-column justify-content-center ml-2">
                              <span>Limazia</span>
                              <small className="text-muted">
                                32 days remaining
                              </small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-8 p-4">
                    <div className="outlet">{renderOutlet(activeTab)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
