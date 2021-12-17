import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../pages/Search";
import Signup from "../pages/auth/Signup";
import Login from "../pages/auth/Login";
import ProtectedRoute from "../pages/auth/ProtectedRoute";
import Home from "../pages/Home";
import EstablishmentDetails from "./EstablishmentDetails";
import Assessment from "../pages/AssessmentPage";
import AssessmentInsert from "../pages/AssessmentInsert";
import Profile from "../pages/Profile";

// Produtos
import ProductCreate from "../pages/product/ProductCreate";
import ProductList from "../pages/product/ProductList";
import ProductDetail from "../pages/product/ProductDetail";
import ProductDelete from "../pages/product/ProductDelete";

import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <div>
        <div>
          <Routes>
          <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route path="/search" element={<ProtectedRoute component={Search} />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/establishment/:id"
              element={<ProtectedRoute component={EstablishmentDetails} />}
            />
            <Route
              path="/product/create"
              element={<ProtectedRoute component={ProductCreate} />}
            />
            <Route
              path="/product/list"
              element={<ProtectedRoute component={ProductList} />}
            />
            <Route
              path="/product/:id"
              element={<ProtectedRoute component={ProductDetail} />}
            />
            <Route
              path="/product/delete/:id"
              element={<ProtectedRoute component={ProductDelete} />}
            />
            <Route
              path="/avaliacao"
              element={<ProtectedRoute component={Assessment} />}
            />
              <Route
              path="/avaliacao-new"
              element={<ProtectedRoute component={AssessmentInsert} />}
            />
                          <Route
              path="/profile"
              element={<ProtectedRoute component={Profile} />}
            />


          </Routes>
        </div>
      </div>
    </AuthContextComponent>
  );
}

export default App;
