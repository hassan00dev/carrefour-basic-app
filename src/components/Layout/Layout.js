import { Typography } from '@fullscreendigital/carrefour-dex-fe'
import Favicon from 'react-favicon'
import { ErrorBoundary } from 'components/core-ui'
import { isAuthenticated } from 'utils/authService'

const Layout = props => {
  const isAuth = isAuthenticated()

  return (
    <Typography variant="light" component="div">
      <Favicon url="images/favicon.ico" />
      {isAuth ? (
        <div>
          <ErrorBoundary>{props.children}</ErrorBoundary>
        </div>
      ) : (
        <ErrorBoundary>{props.children}</ErrorBoundary>
      )}
    </Typography>
  )
}

export default Layout
