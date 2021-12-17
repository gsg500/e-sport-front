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
import UserEdit from "../components/UserEdit";
import UserDelete from "../components/UserDelete";
import EstablishmentDelete from "./EstablishmentDelete";
import EstablishmentEdit from "./EstablishmentEdit";



import { AuthContextComponent } from "../contexts/authContext";

function App() {
  return (
    <AuthContextComponent>
      <div>
        <div>
          <Routes>
            <Route path="/" element={<ProtectedRoute component={Home} />} />
            <Route
              path="/search"
              element={<ProtectedRoute component={Search} />}
            />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/establishment/:id"
              element={<ProtectedRoute component={EstablishmentDetails} />}
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
            <Route
              path="/edit-user"
              element={<ProtectedRoute component={UserEdit} />}
            />
            <Route
              path="/delete-user"
              element={<ProtectedRoute component={UserDelete} />}
            />
                        <Route
              path="/edit-establishment"
              element={<ProtectedRoute component={EstablishmentEdit} />}
            />
            <Route
              path="/delete-establishment"
              element={<ProtectedRoute component={EstablishmentDelete} />}
            />
          </Routes>
        </div>
      </div>
    </AuthContextComponent>
  );
}

export default App;
