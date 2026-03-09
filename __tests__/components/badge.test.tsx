import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Badge } from '../../src/components/ui/badge'

describe('Badge', () => {
  it('renders children', () => {
    render(<Badge>Active</Badge>)
    expect(screen.getByText('Active')).toBeInTheDocument()
  })

  it('applies active variant classes', () => {
    render(<Badge variant="active">Active</Badge>)
    const badge = screen.getByText('Active')
    expect(badge).toHaveClass('bg-[#ECFDF3]', 'text-[#027A48]')
  })

  it('applies inactive variant classes', () => {
    render(<Badge variant="inactive">In Active</Badge>)
    const badge = screen.getByText('In Active')
    expect(badge).toHaveClass('bg-[#F2994A]', 'text-white')
  })
})
