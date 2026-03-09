import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import RolesDataTable from '../../src/pages/settings/components/roles/roles-datatable'

const mockRoles = [
  {
    id: 1,
    name: 'Superadmin',
    type: 'DEFAULT',
    dateCreated: '2023-01-01',
    status: 'Active',
    roleUsers: {
      visible: [{ id: 1, name: 'Alice Johnson', avatar: 'https://i.pravatar.cc/40?img=1' }],
      totalCount: 1,
      extraCount: '',
    },
  },
  {
    id: 2,
    name: 'Deputy sales personnel',
    type: 'CUSTOM',
    dateCreated: '2023-04-01',
    status: 'Inactive',
    roleUsers: {
      visible: [{ id: 2, name: 'Bob Smith', avatar: 'https://i.pravatar.cc/40?img=2' }],
      totalCount: 1,
      extraCount: '',
    },
  },
]

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: jest.fn().mockResolvedValue({ data: mockRoles }),
  } as unknown as Response)
})

afterEach(() => {
  jest.resetAllMocks()
})

const renderComponent = () =>
  render(
    <MemoryRouter>
      <RolesDataTable />
    </MemoryRouter>
  )

describe('RolesDataTable', () => {
  it('renders the section heading', async () => {
    renderComponent()
    expect(screen.getByText('User Roles')).toBeInTheDocument()
    await waitFor(() => {}) // flush pending async state updates
  })

  it('shows skeleton loading state initially', async () => {
    renderComponent()
    expect(screen.queryByText('Superadmin')).not.toBeInTheDocument()
    await waitFor(() => {}) // flush pending async state updates
  })

  it('renders role rows after fetch resolves', async () => {
    renderComponent()
    await waitFor(() => expect(screen.getByText('Superadmin')).toBeInTheDocument())
    expect(screen.getByText('Deputy sales personnel')).toBeInTheDocument()
  })

  it('renders Active badge for active roles', async () => {
    renderComponent()
    await waitFor(() => screen.getByText('Superadmin'))
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('renders In Active badge for inactive roles', async () => {
    renderComponent()
    await waitFor(() => screen.getByText('Deputy sales personnel'))
    expect(screen.getByText('In Active')).toBeInTheDocument()
  })

  it('renders the Download all button', async () => {
    renderComponent()
    expect(screen.getByRole('button', { name: /download all/i })).toBeInTheDocument()
    await waitFor(() => {}) // flush pending async state updates
  })

  it('calls fetch with the roles endpoint', async () => {
    renderComponent()
    await waitFor(() => screen.getByText('Superadmin'))
    expect(global.fetch).toHaveBeenCalledWith(expect.stringContaining('/roles'))
  })
})
