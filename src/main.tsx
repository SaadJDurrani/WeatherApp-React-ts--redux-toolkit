import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './Components/Store/Store.ts'
import { CustomTheme } from './Components/CustomTheme.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CustomTheme>

    <Provider store={store}>
      <App />
    </Provider>
    </CustomTheme>
  </StrictMode>,
)
