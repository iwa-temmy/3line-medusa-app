import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import MobileNavigation from '../../src/components/ui/sidebar/mobile-navigation'

describe('MobileNavigation', () => {
  it('renders the logo', () => {
    render(<MobileNavigation sidebarOpen={true} setSideBarOpen={jest.fn()} />)
    expect(screen.getByAltText('Logo')).toBeInTheDocument()
  })

  it('calls setSideBarOpen toggling from open to closed', () => {
    const setSideBarOpen = jest.fn()
    render(<MobileNavigation sidebarOpen={true} setSideBarOpen={setSideBarOpen} />)
    fireEvent.click(screen.getByRole('button'))
    expect(setSideBarOpen).toHaveBeenCalledWith(false)
  })

  it('calls setSideBarOpen toggling from closed to open', () => {
    const setSideBarOpen = jest.fn()
    render(<MobileNavigation sidebarOpen={false} setSideBarOpen={setSideBarOpen} />)
    fireEvent.click(screen.getByRole('button'))
    expect(setSideBarOpen).toHaveBeenCalledWith(true)
  })
})
