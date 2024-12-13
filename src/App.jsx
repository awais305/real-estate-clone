import { Route, Routes } from "react-router-dom";
import { AppRoutes } from "./Routes/Routes";
import React, { Suspense, useEffect, useRef, useState } from "react";
import LoaderComponent from "./Components/LoaderComponent/LoaderComponent";
import AppbarComponent from "./Components/AppbarComponent/AppbarComponent";
import DropdownMenu from "./Components/AppbarComponent/DropdownMenu";
import FooterComponent from "./Components/FooterComponent/FooterComponent";

function App() {
  const [open, setOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(
    JSON.parse(localStorage.getItem("isSignedIn"))
  );

  // console.log(isSignedIn);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <Routes>
      {AppRoutes.map((appRoute, index) => {
        const WrapperComponent = appRoute.wrapper || React.Fragment;
        const Component = appRoute.component;

        return (
          <Route
            key={index}
            path={appRoute.path}
            element={
              <React.Fragment>
                {!appRoute.hideNavbar && (
                  <>
                    <AppbarComponent
                      // isSignedIn={isSignedIn?.value || false}
                      isSignedIn={true}
                      onMouseDown={(e) => e.stopPropagation()}
                      onClickOpenMenu={() => setOpen((prevState) => !prevState)}
                    />

                    <DropdownMenu
                      menuRef={menuRef}
                      open={open}
                      setOpen={() => setOpen((prevState) => !prevState)}
                    />
                  </>
                )}

                <Suspense fallback={<LoaderComponent />}>
                  <WrapperComponent>
                    <Component />
                    {!appRoute.hideFooter && <FooterComponent />}
                  </WrapperComponent>
                </Suspense>
              </React.Fragment>
            }
          />
        );
      })}
    </Routes>
  );
}

export default App;
