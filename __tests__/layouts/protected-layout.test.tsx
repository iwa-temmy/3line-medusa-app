import '@testing-library/jest-dom'
import { render, screen, act } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProtectedLayout from '../../src/protected-layout'

const renderLayout = () =>
  render(
    <MemoryRouter>
      <ProtectedLayout>
        <p>Page content</p>
      </ProtectedLayout>
    </MemoryRouter>
  )

describe('ProtectedLayout', () => {
  it('renders children', () => {
    renderLayout()
    expect(screen.getByText('Page content')).toBeInTheDocument()
  })

  it('renders the mobile navigation', () => {
    renderLayout()
    const logos = screen.getAllByAltText('Logo')
    expect(logos.length).toBeGreaterThanOrEqual(1)
  })

  it('forces sidebar open when switching to desktop breakpoint', () => {
    const listeners: ((e: Partial<MediaQueryListEvent>) => void)[] = []
    ;(window.matchMedia as jest.Mock).mockReturnValue({
      matches: false,
      addEventListener: jest.fn((_: string, cb: (e: Partial<MediaQueryListEvent>) => void) => {
        listeners.push(cb)
      }),
      removeEventListener: jest.fn(),
    })

    renderLayout()

    act(() => {
      listeners.forEach((cb) => cb({ matches: true }))
    })

    const aside = document.querySelector('aside')
    expect(aside).not.toHaveClass('-translate-x-96')
  })
})
