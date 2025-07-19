import React from 'react';
import { Container } from 'react-bootstrap';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <main className="main-content">
        <Container fluid className="px-0">
          {children}
        </Container>
      </main>
    </div>
  );
};

export default Layout; 