import { useEffect } from "react"
import { Route, Routes } from "react-router-dom"
import CartScreen from "./components/Cart/CartScreen"
import HomeScreen from "./components/Home/HomeScreen"
import LoginScreen from "./components/Login/LoginScreen"
import ProtectedRoutes from "./components/ProtectedRoutes"
import PurchasesScreen from "./components/Purchases/PurchasesScreen"
import FooterScreen from "./components/Shared/FooterScreen"
import HeaderScreen from "./components/Shared/HeaderScreen"
import ProductScreen from "./product/ProductScreen"
import {useDispatch} from 'react-redux'
import { getAllproducts } from "./store/slices/products.slices"
import axios from "axios"


function App() {

  // const newUser = {
  //   firstName: "zaba",
  //   lastName: "zabaleta",
  //   email: "zabaleta2@gmail.com",
  //   password: "pass1234",
  //   phone: "1234567891",
  //   role: "admin"
  // }

  // const URL = "https://ecommerce-api-react.herokuapp.com/api/v1/users"

  // useEffect(() => {
  //   axios.post(URL, newUser)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }, [])
  

  const dispatch = useDispatch()

  useEffect(() =>{
    dispatch(getAllproducts())
  }, []) 

  return (
    <div className="App">
      <HeaderScreen />
      <main className="main">
        <Routes>
          <Route path='/' element={<HomeScreen />} />
          <Route path='/login' element={<LoginScreen />} />

          <Route element={<ProtectedRoutes />}>
            <Route path="/cart" element={<CartScreen />} />
            <Route path="/purchases" element={<PurchasesScreen />} />
          </Route>
          <Route path="/product/:id" element={<ProductScreen/>}/>
        </Routes>
      </main>
      <FooterScreen />
    </div>
  )
}

export default App
