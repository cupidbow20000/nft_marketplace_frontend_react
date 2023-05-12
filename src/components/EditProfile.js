import React from "react";
import { Link } from "react-router-dom";

function EditProfile() {
  return (
    <>
      {/* <!-- =============page banner==================== -->*/}
      <div className="page-banner">
        <div className="container">
          <div className="page-banner-content">
            <div className="banner-inner">
              <h2>User Profile</h2>
              <div className="page-route">
              <Link to="/">Home</Link>
                <p>/ Pages / User Profile </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- =============page banner end================ -->*/}
      {/* <!-- ==============profile area========== --> */}

      <section className="edit-profile">
        <div className="container">
          <div className="edit-profile-wrapper">
            <div className="row g-4">
              <div className="col-lg-6 col-md-12">
                <div className="edit-profile-left">
                  <form action="">
                    <div className="form-item">
                      <label for="">
                        Username <span>*</span>
                      </label>
                      <input type="text" placeholder="Enter username" />
                    </div>
                    <div className="form-item">
                      <label for="">
                        Bio <span>*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Tell the world your story!"
                      />
                    </div>
                    <div className="form-item">
                      <label for="">
                        Email Address <span>*</span>
                      </label>
                      <input type="email" placeholder="Enter email" />
                    </div>
                    <div className="form-item links">
                      <label>
                        Link <span>*</span>
                      </label>
                      <div className="social-lint-con">
                        <div className="social-link">
                          <div className="social-img">
                            <svg
                              width="16"
                              height="14"
                              viewBox="0 0 16 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M14.3438 3.75C14.9688 3.28125 15.5312 2.71875 15.9688 2.0625C15.4062 2.3125 14.75 2.5 14.0938 2.5625C14.7812 2.15625 15.2812 1.53125 15.5312 0.75C14.9062 1.125 14.1875 1.40625 13.4688 1.5625C12.8438 0.90625 12 0.53125 11.0625 0.53125C9.25 0.53125 7.78125 2 7.78125 3.8125C7.78125 4.0625 7.8125 4.3125 7.875 4.5625C5.15625 4.40625 2.71875 3.09375 1.09375 1.125C0.8125 1.59375 0.65625 2.15625 0.65625 2.78125C0.65625 3.90625 1.21875 4.90625 2.125 5.5C1.59375 5.46875 1.0625 5.34375 0.625 5.09375V5.125C0.625 6.71875 1.75 8.03125 3.25 8.34375C3 8.40625 2.6875 8.46875 2.40625 8.46875C2.1875 8.46875 2 8.4375 1.78125 8.40625C2.1875 9.71875 3.40625 10.6562 4.84375 10.6875C3.71875 11.5625 2.3125 12.0938 0.78125 12.0938C0.5 12.0938 0.25 12.0625 0 12.0312C1.4375 12.9688 3.15625 13.5 5.03125 13.5C11.0625 13.5 14.3438 8.53125 14.3438 4.1875C14.3438 4.03125 14.3438 3.90625 14.3438 3.75Z"
                                fill="#FC5050"
                              />
                            </svg>
                          </div>
                          <input type="text" placeholder="@twittername" />
                        </div>
                        <div className="social-link">
                          <div className="social-img">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M8 3.40625C6 3.40625 4.40625 5.03125 4.40625 7C4.40625 9 6 10.5938 8 10.5938C9.96875 10.5938 11.5938 9 11.5938 7C11.5938 5.03125 9.96875 3.40625 8 3.40625ZM8 9.34375C6.71875 9.34375 5.65625 8.3125 5.65625 7C5.65625 5.71875 6.6875 4.6875 8 4.6875C9.28125 4.6875 10.3125 5.71875 10.3125 7C10.3125 8.3125 9.28125 9.34375 8 9.34375ZM12.5625 3.28125C12.5625 2.8125 12.1875 2.4375 11.7188 2.4375C11.25 2.4375 10.875 2.8125 10.875 3.28125C10.875 3.75 11.25 4.125 11.7188 4.125C12.1875 4.125 12.5625 3.75 12.5625 3.28125ZM14.9375 4.125C14.875 3 14.625 2 13.8125 1.1875C13 0.375 12 0.125 10.875 0.0625C9.71875 0 6.25 0 5.09375 0.0625C3.96875 0.125 3 0.375 2.15625 1.1875C1.34375 2 1.09375 3 1.03125 4.125C0.96875 5.28125 0.96875 8.75 1.03125 9.90625C1.09375 11.0312 1.34375 12 2.15625 12.8438C3 13.6562 3.96875 13.9062 5.09375 13.9688C6.25 14.0312 9.71875 14.0312 10.875 13.9688C12 13.9062 13 13.6562 13.8125 12.8438C14.625 12 14.875 11.0312 14.9375 9.90625C15 8.75 15 5.28125 14.9375 4.125ZM13.4375 11.125C13.2188 11.75 12.7188 12.2188 12.125 12.4688C11.1875 12.8438 9 12.75 8 12.75C6.96875 12.75 4.78125 12.8438 3.875 12.4688C3.25 12.2188 2.78125 11.75 2.53125 11.125C2.15625 10.2188 2.25 8.03125 2.25 7C2.25 6 2.15625 3.8125 2.53125 2.875C2.78125 2.28125 3.25 1.8125 3.875 1.5625C4.78125 1.1875 6.96875 1.28125 8 1.28125C9 1.28125 11.1875 1.1875 12.125 1.5625C12.7188 1.78125 13.1875 2.28125 13.4375 2.875C13.8125 3.8125 13.7188 6 13.7188 7C13.7188 8.03125 13.8125 10.2188 13.4375 11.125Z"
                                fill="#FC5050"
                              />
                            </svg>
                          </div>
                          <input type="text" placeholder="instagramname" />
                        </div>
                        <div className="social-link">
                          <div className="social-img">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.5 5C10.0625 2.21875 8.96875 0.25 7.75 0.25C6.5 0.25 5.4375 2.21875 4.96875 5H10.5ZM4.75 8C4.75 8.71875 4.78125 9.375 4.84375 10H10.625C10.6875 9.375 10.7188 8.71875 10.7188 8C10.7188 7.3125 10.6875 6.65625 10.625 6H4.84375C4.78125 6.65625 4.75 7.3125 4.75 8ZM14.875 5C14 2.90625 12.1875 1.25 9.9375 0.59375C10.7188 1.65625 11.2188 3.25 11.5 5H14.875ZM5.53125 0.59375C3.28125 1.25 1.46875 2.90625 0.59375 5H3.96875C4.25 3.25 4.75 1.65625 5.53125 0.59375ZM15.2188 6H11.625C11.6875 6.65625 11.75 7.34375 11.75 8C11.75 8.6875 11.6875 9.34375 11.625 10H15.2188C15.375 9.375 15.4688 8.71875 15.4688 8C15.4688 7.3125 15.375 6.65625 15.2188 6ZM3.75 8C3.75 7.34375 3.78125 6.65625 3.84375 6H0.25C0.09375 6.65625 0 7.3125 0 8C0 8.71875 0.09375 9.375 0.25 10H3.84375C3.78125 9.34375 3.75 8.6875 3.75 8ZM4.96875 11C5.4375 13.8125 6.5 15.75 7.75 15.75C8.96875 15.75 10.0625 13.8125 10.5 11H4.96875ZM9.9375 15.4375C12.1875 14.7812 14 13.125 14.875 11H11.5C11.25 12.7812 10.7188 14.375 9.9375 15.4375ZM0.59375 11C1.46875 13.125 3.28125 14.7812 5.53125 15.4375C4.75 14.375 4.25 12.7812 3.96875 11H0.59375Z"
                                fill="#FC5050"
                              />
                            </svg>
                          </div>
                          <input type="text" placeholder="yoursitename.com" />
                        </div>
                      </div>
                    </div>
                    <div className="form-item ">
                      <label>Wallet Address</label>
                      <div className="wallet-input">
                        <p>0x7a9fe22691c811ea339401bbb2leb</p>
                        <div className="wallet-copy-icon">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_160_508)">
                              <path
                                d="M4.66732 4.66671V2.00004C4.66732 1.82323 4.73756 1.65366 4.86258 1.52864C4.9876 1.40361 5.15717 1.33337 5.33398 1.33337H14.0007C14.1775 1.33337 14.347 1.40361 14.4721 1.52864C14.5971 1.65366 14.6673 1.82323 14.6673 2.00004V10.6667C14.6673 10.8435 14.5971 11.0131 14.4721 11.1381C14.347 11.2631 14.1775 11.3334 14.0007 11.3334H11.334V13.9954C11.334 14.366 11.0347 14.6667 10.6627 14.6667H2.00532C1.91713 14.6668 1.8298 14.6495 1.74831 14.6158C1.66682 14.5821 1.59277 14.5326 1.53042 14.4703C1.46806 14.4079 1.41861 14.3339 1.38491 14.2524C1.3512 14.1709 1.3339 14.0836 1.33398 13.9954L1.33598 5.33804C1.33598 4.96737 1.63532 4.66671 2.00732 4.66671H4.66732ZM6.00065 4.66671H10.6627C11.0333 4.66671 11.334 4.96604 11.334 5.33804V10H13.334V2.66671H6.00065V4.66671ZM2.66932 6.00004L2.66732 13.3334H10.0007V6.00004H2.66932Z"
                                fill="#7D7F96"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_160_508">
                                <rect width="16" height="16" fill="white" />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-6 col-md-12">
                <div className="edit-profile-right">
                  <div className="edit-img">
                    <img src="assets/img/product/1.png" alt="" id="photo" />
                    <input type="file" id="file" />
                    <label for="file" id="uploadBtn">
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.48533 5.10631L7.54267 4.16365L1.33333 10.373V11.3156H2.276L8.48533 5.10631ZM9.428 4.16365L10.3707 3.22098L9.428 2.27831L8.48533 3.22098L9.428 4.16365ZM2.828 12.649H0V9.82031L8.95667 0.863648C9.08169 0.738667 9.25122 0.668457 9.428 0.668457C9.60478 0.668457 9.77432 0.738667 9.89933 0.863648L11.7853 2.74965C11.9103 2.87467 11.9805 3.04421 11.9805 3.22098C11.9805 3.39776 11.9103 3.5673 11.7853 3.69231L2.82867 12.649H2.828Z"
                          fill="#7D7F96"
                        />
                      </svg>
                    </label>
                  </div>
                  <div className="edit-content">
                    <h3>Profile Image</h3>
                    <p>
                      We recommend an image of at least 300x300. Gifs work too.
                      Max 5mb.
                    </p>
                  </div>
                </div>
                <div className="edit-profile-btn">
                  <a href="">Update Profile</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ==============profile area end========== --> */}
    </>
  );
}

export default EditProfile;