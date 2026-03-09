import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import Tabs from '../../src/pages/settings/components/tabs'

const tabList = ['My details', 'Roles', 'Notifications']

describe('Tabs', () => {
  it('renders all tab buttons', () => {
    render(<Tabs tabList={tabList} activeTab="Roles" onTabClick={jest.fn()} />)
    tabList.forEach((tab) => {
      expect(screen.getByRole('button', { name: tab })).toBeInTheDocument()
    })
  })

  it('highlights the active tab', () => {
    render(<Tabs tabList={tabList} activeTab="Roles" onTabClick={jest.fn()} />)
    expect(screen.getByRole('button', { name: 'Roles' })).toHaveClass('bg-gray-200')
  })

  it('does not highlight inactive tabs', () => {
    render(<Tabs tabList={tabList} activeTab="Roles" onTabClick={jest.fn()} />)
    expect(screen.getByRole('button', { name: 'My details' })).not.toHaveClass('bg-gray-200')
  })

  it('calls onTabClick with the correct tab when clicked', () => {
    const onTabClick = jest.fn()
    render(<Tabs tabList={tabList} activeTab="Roles" onTabClick={onTabClick} />)
    fireEvent.click(screen.getByRole('button', { name: 'Notifications' }))
    expect(onTabClick).toHaveBeenCalledWith('Notifications')
  })
})
