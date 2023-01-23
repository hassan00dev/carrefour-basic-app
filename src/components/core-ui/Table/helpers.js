import { renderComponent } from 'utils/dynamicRenderingService'

export const getInitialTableFilters = (searchParams, filters) => {
  let params = {}
  searchParams.forEach((value, key) => {
    const filterKey = filters.find(filter => filter.valueFromQP === key)?.name
    params[filterKey] = value
  })

  console.log(params)
  return params
}

export const getRenderedColumns = (columns, tableFilters) =>
  columns.map(column => {
    const { render } = column
    if (column.render) {
      return {
        ...column,
        render: row => {
          if (render.UIComponent === 'Link') {
            let href = `${render.href}?$id=${row[render.idKeyName]}`
            if (render.linkFilters?.length) {
              let url = ''
              Object.keys(tableFilters).map(key => {
                if (render.linkFilters.includes(key)) {
                  url = `${url}&${key}=${tableFilters[key]}`
                }
              })
              href = `${href}${url}`
            }
            return renderComponent({
              ...render,
              href,
              children: row[column.field]
            })
          }
          return renderComponent(render)
        }
      }
    } else {
      return column
    }
  })
