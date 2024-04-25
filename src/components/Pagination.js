import React, { Fragment } from "react";

const Pagination = () => {
  return (
    <Fragment>
      <div class="pagination-box">
        <ul class="pagination-list">
          <li>
            <a href="#" class="active">
              1
            </a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">
              Next Page <i class="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default Pagination;
