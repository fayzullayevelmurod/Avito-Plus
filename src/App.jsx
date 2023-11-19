import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom'

// Pages
import Home from '@pages/Home/Home'
import PageNotFound from '@pages/NotFound/PageNotFound'

// Layouts
import RootLayout from '@components/layouts/RootLayout'

export default function App() {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    )
  )

  return <RouterProvider router={routes} />
}