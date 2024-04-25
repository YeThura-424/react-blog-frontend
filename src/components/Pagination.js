import React, { Fragment } from "react";

const Pagination = () => {
  return (
    <Fragment>
      <div className="pagination-box">
        <ul className="pagination-list">
          <li>
            <a href="#" className="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">
              Next Page <i className="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Pagination;
