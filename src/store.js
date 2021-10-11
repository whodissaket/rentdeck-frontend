import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userLoginReducer,
    userRegisterReducer,

  } from './reducers/userReducers'
import { cartReducer } from './reducers/cartReducers'

  const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    cart: cartReducer,
  })

  const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : []
  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {}
  const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null

  const initialState = {
    userLogin: { userInfo: userInfoFromStorage },
    cart: {
      cartItems: cartItemsFromStorage,
      shippingAddress: shippingAddressFromStorage,
    },
  }
  const middleware = [thunk]

  const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  )
  
export default store