
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvider from './components/provider/AuthProvider.jsx'

createRoot(document.getElementById('root')).render(
  <div className='max-w-6xl mx-auto'>
  <AuthProvider>
  <RouterProvider router={router}/>
  </AuthProvider>
  </div>
    
  
)
