import React from "react";

function Page404() {
  return (
    <div className="page404">
      <div>
        <a href="/">
          <button type="button" className="btn home-page-link">
            &#60; &#60; &#60; Home Page
          </button>
        </a>
      </div>
      <img
        className="koala404"
        src="https://img.freepik.com/premium-vector/error-404-illustration_585024-2.jpg?w=740"
        alt="Page 404"
      />
      <div className="gradient" />
    </div>
  );
}

export default Page404;
