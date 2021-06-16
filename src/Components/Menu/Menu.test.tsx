import {render, screen, fireEvent, cleanup, queryAllByTestId} from '@testing-library/react'
import {Menu} from './Menu'
import {App} from '../../App'
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import userEvent from '@testing-library/user-event'
import { createMemoryHistory } from 'history'
import { Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'

describe('Se prueba el routing', () =>{
  test('/Catalogo', () => {
      const history = createMemoryHistory()
      render(<Router history={history}><App /></Router>) 
      const leftClick = { button: 0 }
      userEvent.click(screen.getByTestId(/linkPrincipal/i), leftClick)

      expect(screen.getByText(/Hola. Este es el dashboard/i)).toBeInTheDocument()
  })  
})

