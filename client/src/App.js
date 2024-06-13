import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout";
import { Karyawan } from "./components/karyawan";
import { KaryawanAdd } from "./components/karyawanAdd";
import { KaryawanEdit } from "./components/karyawanEdit";
import { Jabatan } from "./components/jabatan";
import { JabatanAdd } from "./components/jabatanAdd";
import { JabatanEdit } from "./components/jabatanEdit";
import { Department } from "./components/department";
import { DepartmentAdd } from "./components/departmentAdd";
import { DepartmentEdit } from "./components/departmentEdit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Karyawan />} />
          <Route path="/karyawan/add" element={<KaryawanAdd />} />
          <Route path="/karyawan/edit">
            <Route path=":id" element={<KaryawanEdit />} />
          </Route>
          <Route path="/jabatan" index element={<Jabatan />} />
          <Route path="/jabatan/add" element={<JabatanAdd />} />
          <Route path="/jabatan/edit">
            <Route path=":id" element={<JabatanEdit />} />
          </Route>
          <Route path="/department" index element={<Department />} />
          <Route path="/department/add" element={<DepartmentAdd />} />
          <Route path="/department/edit">
            <Route path=":id" element={<DepartmentEdit />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
