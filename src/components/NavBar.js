import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="search-button" href="#">
            <i className="fa fa-search"></i>
          </a>
          <form className="form-search">
            <input type="search" placeholder="Search:" />
          </form>
          <ul className="navbar-nav m-auto">
            <li className="drop-link">
              {/* <a className="active" href="index.html">
                Home <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a> */}
              <Link to="/">Home</Link>
            </li>
            <li className="drop-link">
              <a href="#">
                Features <i className="fa fa-angle-down" aria-hidden="true"></i>
              </a>
              <ul className="dropdown">
                <li>
                  <Link to="/category">
                    Category <i className="fa fa-angle-right"></i>
                  </Link>
                </li>
                <li>
                  <Link to="All Post">
                    Posts <i className="fa fa-angle-right"></i>
                  </Link>
                </li>
                <li>
                  <a href="about.html">
                    Pages <i className="fa fa-angle-right"></i>
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <a href="category-mix.html">Lifestyle</a>
              <div className="mega-dropdown">
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/c10.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">
                      Aliquam tincidunt mauris eu risus.
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/c11.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">Cras ornare tristique elit.</a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/c12.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">Praesent placerat risus.</a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/c13.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">
                      Morbi in sem quis dui placerat ornare.
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/c15.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">
                      Quisque volutpat mattis semper suscipit eros.
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="category-grid.html">Travel</a>
              <div className="mega-dropdown">
                <ul className="filter-list">
                  <li>
                    <a href="#">Travel</a>
                  </li>
                  <li>
                    <a href="#">Trending</a>
                  </li>
                  <li>
                    <a href="#">Latest</a>
                  </li>
                </ul>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/p5.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">Cras ornare tristique elit.</a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/p6.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">Praesent placerat risus.</a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/p7.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">
                      Morbi in sem quis dui placerat ornare.
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
                <div className="news-post standard-post">
                  <div className="image-holder">
                    <img src="upload/blog/p8.jpg" alt="" />
                  </div>
                  <h2>
                    <a href="single-post.html">
                      Quisque volutpat mattis semper suscipit eros.
                    </a>
                  </h2>
                  <ul className="post-tags">
                    <li>
                      by <a href="#">John Smith</a>
                    </li>
                    <li>1 days ago</li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <a href="contact.html">Contacts</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto social-list">
            <li>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
