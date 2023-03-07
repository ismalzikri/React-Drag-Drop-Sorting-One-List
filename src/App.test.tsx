import { render, screen} from '@testing-library/react'
import { CardList } from './components/Cards'
import App from './App'

describe('Small scope test', () => {
  it ('should be render App component', () => {
    render(<App/>)
    expect(screen.getByText('Drag & Drop One List Without Library!')).toBeInTheDocument()
  }) 
  it ('CardList component should be rendered as child component', () => {
    const { getByTestId } = render(<CardList/>)
    expect(getByTestId('child-cardlist')).toBeInTheDocument()
  }) 
})