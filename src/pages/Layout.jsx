/* eslint-disable react/prop-types */

const Layout = ({ children }) => {
  return (
    <div className="px-6 mx-auto my-4">
      <section>{children}</section>
    </div>
  );
};

export default Layout;