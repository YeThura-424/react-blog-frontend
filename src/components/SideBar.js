import React, { Fragment } from "react";

const SideBar = () => {
  return (
    <Fragment>
      <div class="col-lg-4">
        <div class="sidebar">
          <div class="widget social-widget">
            <ul class="social-list">
              <li>
                <a href="#">
                  <i class="fa fa-facebook"></i>
                  facebook
                  <span>25k likes</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-twitter"></i>
                  twitter
                  <span>31k followers</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="fa fa-instagram"></i>
                  instagram
                  <span>31k followers</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="widget category-widget">
            <h2>Categories</h2>
            <ul class="category-list">
              <li>
                <a href="#">
                  Travel <span>24</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Lifestyle <span>16</span>
                </a>
              </li>
              <li>
                <a href="#">
                  Food <span>8</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="widget subscribe-widget2">
            <h2>Join Our Newsletter</h2>
            <p>
              Sign up for our free newsletters to receive the latest news. Don't
              worry we won't do spam.
            </p>
            <form class="subscibe-form">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Enter Your Email Address"
              />
              <input type="submit" id="submit" value="Subscribe" />
            </form>
          </div>

          <div class="widget instagram-widget">
            <h2>Our Latest Instagram Posts</h2>
            <ul class="insta-list">
              <li>
                <a href="#">
                  <img src="upload/instagram/1.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/instagram/2.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/instagram/3.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/instagram/4.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/instagram/5.jpg" alt="" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="upload/instagram/6.jpg" alt="" />
                </a>
              </li>
            </ul>
          </div>

          <div class="widget list-widget">
            <h2>Latest Stories</h2>
            <ul class="list-posts">
              <li>
                <a class="text-link" href="#">
                  Lifestyle
                </a>
                <h2>
                  <a href="single-post.html">Fusce pellentesque suscipit.</a>
                </h2>
                <ul class="post-tags">
                  <li>2 days ago</li>
                  <li>
                    <a href="#">0 comments</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="text-link" href="#">
                  Food
                </a>
                <h2>
                  <a href="single-post.html">
                    Integer vitae libero ac risus egestas placerat.
                  </a>
                </h2>
                <ul class="post-tags">
                  <li>2 days ago</li>
                  <li>
                    <a href="#">3 comments</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="text-link" href="#">
                  Lifestyle
                </a>
                <h2>
                  <a href="single-post.html">
                    Vestibulum commodo felisquis tortor.
                  </a>
                </h2>
                <ul class="post-tags">
                  <li>4 days ago</li>
                  <li>
                    <a href="#">0 comments</a>
                  </li>
                </ul>
              </li>
              <li>
                <a class="text-link" href="#">
                  Travel
                </a>
                <h2>
                  <a href="single-post.html">Quisque a lectus. </a>
                </h2>
                <ul class="post-tags">
                  <li>4 days ago</li>
                  <li>
                    <a href="#">0 comments</a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default SideBar;
