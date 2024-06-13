import { useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

export const Layout = () => {
  const pathname = useLocation();
  useEffect(() => {}, []);
  return (
    <body data-bs-theme="dark">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Immobi
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  to="/"
                  id="nav_dept"
                  className={`nav-link ${
                    pathname.pathname === "/" ||
                    pathname.pathname === "/karyawan/add"
                      ? "active"
                      : ""
                  }`}
                >
                  Karyawan
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/jabatan"
                  id="nav_jab"
                  className={`nav-link ${
                    pathname.pathname === "/jabatan" ||
                    pathname.pathname === "/jabatan/add"
                      ? "active"
                      : ""
                  }`}
                >
                  Jabatan
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/department"
                  id="nav_jab"
                  className={`nav-link ${
                    pathname.pathname === "/department" ||
                    pathname.pathname === "/department/add"
                      ? "active"
                      : ""
                  }`}
                >
                  Department
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container-fluid min-vh-100 p-4">
        <Outlet />
      </div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">Sulthan Laksono Ramadhan</div>
      </nav>
    </body>
  );
};
