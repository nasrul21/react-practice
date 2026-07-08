import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import routes from './routes';
import App from './App';

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          {Object.keys(routes).map(path => {
            const Element = routes[path].component;
            return <Route key={path} path={path} element={<Element />} />
          })}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
)
