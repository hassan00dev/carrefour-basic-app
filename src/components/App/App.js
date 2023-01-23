import { Routes, Route } from 'react-router-dom'
import { NotFound } from 'components/core-ui'
import { Login } from '../Login'
import { URLS } from 'utils/constants'
import { Layout } from 'components/Layout'
import { ThemeProvider } from '@fullscreendigital/carrefour-dex-fe'
import { pages, createRoutes } from './helpers'

const App = () => {
  return (
    <ThemeProvider theme="light">
      <Layout>
        <Routes>
          {/* private routes */}
          {pages.map((page, index) => createRoutes(page, index))}
          {/* end of private routes */}

          <Route path={URLS.LOGIN} element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  )
}

export default App
