import { ReactNode } from 'react';

const PageTransition = ({ children }: { children: ReactNode }) => (
  <div className="w-full overflow-x-hidden">{children}</div>
);

export default PageTransition;
