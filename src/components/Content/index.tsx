import React, { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "../../routes";
import { IRoute } from "../../utils/types/components";

const AppContent = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route: IRoute, idx: number) => {
            if (route.element) {
              return (
                route.element && (
                  <Route
                    key={idx}
                    path={route.path}
                    element={<route.element />}
                  />
                )
              );
            } else {
              if (Array.isArray(route.children)) {
                return (
                  <Route path={route.path} key={idx}>
                    {route.children.map((route: IRoute, idx: number) => {
                      return (
                        route.element && (
                          <Route
                            key={idx}
                            path={route.path}
                            element={<route.element />}
                          />
                        )
                      );
                    })}
                  </Route>
                );

                return;
              }
            }
          })}
          <Route path="/" element={<Navigate to={"transactions"} replace />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default AppContent;
