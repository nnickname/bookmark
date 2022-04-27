import { render, screen } from '@testing-library/react'
import App from '../src/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a heading', () => {
    render(<App />)

    const Container = screen.getByRole('Container')

    expect(Container).toBeInTheDocument()
  })
})