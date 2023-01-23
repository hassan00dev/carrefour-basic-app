import { Route } from 'react-router-dom'
import { PrivateRoute } from 'components/utils/PrivateRoute'
import { DynamicComponent } from '../DynamicComponent'

export const createRoutes = (page, index) => {
  const { route, JSONSchemaURL } = page
  return (
    <Route
      key={index}
      path={route.url}
      exact={route.exact}
      element={<PrivateRoute component={DynamicComponent} JSONSchemaURL={JSONSchemaURL} />}
    />
  )
}

export const pages = [
  {
    label: 'Home',
    route: {
      url: '/',
      exact: true
    },
    JSONSchemaURL: '/jsonSchema/home'
  },
  {
    label: 'Person',
    route: {
      url: '/persons/:id',
      exact: true
    },
    JSONSchemaURL: '/jsonSchema/person'
  },
  {
    label: 'Person Capacity',
    route: {
      url: '/personCapacity',
      exact: true
    },
    JSONSchemaURL: '/jsonSchema/personCapacity'
  }
]
