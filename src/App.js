

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import { publicRoutes } from "./routes";
import { DefaultLayout } from "./layouts";
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            let Layout = DefaultLayout;
            if (route.layout) {
              Layout = route.layout;
            } else if (route.layout === null) {
              Layout = Fragment;
            }
            if (!route.private) {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            } else {
              return (
                <Route key={index} path={route.path} element={<Page />}>
                  {route.private.map((item, index) => {
                    const PrivatePage = item.component;
                    return (
                      <Route
                        key={index}
                        path={item.path}
                        element={<PrivatePage />}
                      />
                    );
                  })}
                </Route>
              );
            }
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
