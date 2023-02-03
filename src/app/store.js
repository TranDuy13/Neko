import { configureStore} from '@reduxjs/toolkit'
import authReducer from '../components/features/auth/authSlice'
import  productSlice  from '../components/features/product/productSlice'

 const store = configureStore({
    reducer:{
        auth: authReducer,
        product: productSlice
    }
})
export default store