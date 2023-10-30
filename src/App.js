import "./App.css";
import "./index.css";
import Header from "./Components/Header";
import Store from "./utils/Store";
import { Provider } from "react-redux";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchVideo from "./Components/WatchVideo";
import VideoContainer from "./Components/VideoContainer";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <VideoContainer />,
        },
        {
          path: "/watch",
          element: <WatchVideo />,
        },
      ],
    },
  ]);
  return (
    <div className="overflow-hidden overflow-y-hidden h-[100vh]">
      <Provider store={Store}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>

      {/**
       * header
       * sidebar
       * body
       *
       */}
    </div>
  );
}

export default App;
