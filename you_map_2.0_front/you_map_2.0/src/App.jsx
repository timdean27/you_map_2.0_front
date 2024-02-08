import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage"
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/auth' element={<AuthPage/>}/>
      </Routes>
    </PageLayout>
  );
}

export default App;