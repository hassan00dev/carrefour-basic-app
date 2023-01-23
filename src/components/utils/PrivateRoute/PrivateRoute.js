import { Navigate } from 'react-router-dom'
import { URLS } from 'utils/constants'
import { isAuthenticated, getUserRoles } from 'utils/authService'
import { NotFound } from 'components/core-ui'

const PrivateRoute = ({ component: RouteComponent, allow, ...props }) => {
  const roles = allow && allow.split(' ')
  const userRoles = getUserRoles()
  // if no role restriction is present on the route then everything is allowed
  const isAllowed = roles && userRoles ? userRoles.some(r => roles.includes(r)) : true

  return isAuthenticated() ? (
    isAllowed ? (
      <RouteComponent {...props} />
    ) : (
      <NotFound />
    )
  ) : (
    <Navigate to={URLS.LOGIN} />
  )
}

export default PrivateRoute
