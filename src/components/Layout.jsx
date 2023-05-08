import { Outlet } from 'react-router-dom';
import { AppBar } from './index';
import { Suspense } from 'react';
import { BallTriangle } from 'react-loader-spinner';
const Layout = () => {
  return (
    <div>
      <AppBar />
      <Suspense
        fallback={
          <BallTriangle
            height={100}
            width={100}
            radius={5}
            color="grey"
            ariaLabel="ball-triangle-loading"
            wrapperClass={{}}
            wrapperStyle=""
            visible={true}
          />
        }
      >
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
