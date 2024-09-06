import { PrimeReactProvider } from "primereact/api"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PrimeReactProvider value={{ unstyled: true }}>
      <App />
    </PrimeReactProvider>
  </React.StrictMode>
)
