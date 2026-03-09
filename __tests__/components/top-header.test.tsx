import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import TopHeader from '../../src/components/ui/top-header'

describe('TopHeader', () => {
  it('renders the title', () => {
    render(<TopHeader title="Settings" description="Manage your preferences." />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Settings')
  })

  it('renders the description', () => {
    render(<TopHeader title="Settings" description="Manage your preferences." />)
    expect(screen.getByText('Manage your preferences.')).toBeInTheDocument()
  })
})
