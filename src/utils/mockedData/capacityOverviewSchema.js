export const JSONSchema = {
  UIComponent: 'Container',
  id: 'capacityOverviewTableContainer',
  className: '',
  children: [
    {
      UIComponent: 'Box',
      className: '',
      children: [
        {
          UIComponent: 'Table',
          width: '80%',
          action: {
            url: '/capacityOverview',
            type: 'GET'
          },
          hideCheckbox: true,
          columns: [
            {
              title: 'Person',
              field: 'capacity.person.name',
              align: 'left',
              render: {
                UIComponent: 'Link',
                href: '/personCapacity',
                linkFilters: ['capacity.startDate', 'capacity.endDate'],
                idKeyName: 'capacity.person.id'
              }
            },
            {
              title: 'Total Effort (MD)',
              field: 'capacity.person.totalEffort',
              align: 'left'
            },
            {
              title: 'Total Available (MD)',
              field: 'capacity.person.totalAvailable',
              align: 'left'
            },
            {
              title: 'Remaining (MD)',
              field: 'capacity.person.remaining',
              align: 'left'
            }
          ],
          tableActions: {
            searchAction: {
              searchFields: ['capacity.person.name'],
              inputProps: {
                variant: 'outlined'
              }
            },
            filters: [
              {
                UIComponent: 'DatePicker',
                type: 'date',
                name: 'capacity.startDate',
                label: 'Start Date'
              },
              {
                UIComponent: 'DatePicker',
                type: 'date',
                name: 'capacity.endDate',
                label: 'End Date'
              }
            ]
          }
        }
      ]
    }
  ]
}
