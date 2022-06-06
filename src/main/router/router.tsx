import { Routes, Route } from "react-router-dom";

import NavBar from "../../presentation/ui/components/NavBar";
import { Home } from "../../presentation/ui/pages";
import { MakeMemberList, MakeMemberRegister } from "../factories/pages";

const Router = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="members" element={<MakeMemberList />} />
        <Route path="memberRegister" element={<MakeMemberRegister />} />
      </Routes>
    </div>
  );
};

export default Router;
