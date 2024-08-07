import React, { PropsWithChildren, FC } from 'react';
import './pageContentLayout.scss';

interface PageContentLayoutProps extends PropsWithChildren<{}> {
  title: React.ReactNode;
}

const PageContentLayout: FC<PageContentLayoutProps> = ({ children, title }) => {
  return (
    <div className="content-layout">
      <header className="content-header">
        <h1>{title}</h1>
      </header>
      <main className="content-main">
        {children}
      </main>
    </div>
  );
}

export default PageContentLayout;