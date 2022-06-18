import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export { Layout }