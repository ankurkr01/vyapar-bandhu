import { useState, lazy, useEffect } from 'react'
import './index.css'
import Home from './components/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";



import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Enquiry from "./scenes/enquiry/index";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Category from "./scenes/categories";
import Geography from "./scenes/geography";
import FeatureProduct from "./scenes/featureProduct/featureProduct";
import { Button, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

import HomeBanner from './scenes/homeBanner/homeBanner'
import Product from './scenes/product/product'

import { useDispatch, useSelector } from 'react-redux'
import Service from './components/Service';


function App() {

  const [isAuthenticated, setisAuthenticated] = useState(false)
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const dispatch = useDispatch();



  useEffect(() => {

  }, [dispatch])


  if (isAuthenticated) {
    localStorage.setItem('router', 'admin')
  } else {
    localStorage.removeItem('router')
  }


  if (localStorage.getItem('router') === 'admin') {
    return (
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar isSidebar={isSidebar} />
            <main className="contentt">
              <Topbar setIsSidebar={setIsSidebar} />
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/team" element={<Team />} />
                <Route path="/enquiry" element={<Enquiry />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/invoices" element={<Invoices />} />
                <Route path="/form" element={<Form />} />
                <Route path="/banner" element={<HomeBanner />} />
                <Route path="/product" element={<Product />} />
                <Route path="/featureproduct" element={<FeatureProduct />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/line" element={<Line />} />
                <Route path="/faq" element={<FAQ />} />
                {/* <Route path="/calendar" element={<Calendar />} /> */}
                <Route path="/geography" element={<Geography />} />
              </Routes>
            </main>
          </div>
        </ThemeProvider>
        <ToastContainer />
      </ColorModeContext.Provider>
    )
  }



  return (
    <>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />

        <Route path="/admin" element={<Button onClick={() => (setisAuthenticated(true))}>Click to go to Admin</Button>}
        />

      </Routes>
      <ToastContainer />


    </>

  )
}

export default App
