import React from 'react'
import {BuilderComponent} from '@builder.io/react'

const CatchallPage = () => (
  <BuilderComponent
    apiKey="bb209db71e62412dbe0114bdae18fd15"
    model="page"
  >
    <div className="loading">Loading...</div>
  </BuilderComponent>
)

function App() {
  return <CatchallPage />
}

export default App
