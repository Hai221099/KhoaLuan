import React from "react";
import "./sidebar.css";
//Importing bootstrap and other modules
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/umd/popper.min.js";
import { useHistory, Link } from "react-router-dom";

export default function UI({ children }) {
  return (
    <div className="MainDiv">
      <div className="d-flex" id="wrapper">
        <div className="bg-light border-right" id="sidebar-wrapper">
          <ul
            className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
            id="accordionSidebar"
          >
            <Link
              to="/admin"
              className="sidebar-brand d-flex align-items-center justify-content-center"
            >
              <div className="sidebar-brand-icon rotate-n-15">
                {/* <i className="fas fa-laugh-wink"></i> */}
              </div>
              <div className="sidebar-brand-text mx-3">Admin QLDT</div>
            </Link>
            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
              {/* <a href="/educationalProgram" className="nav-link">
                <span>Chương trình đào tạo</span>
              </a> */}
              <Link to="/admin/educationalProgram" className="nav-link">
                Chương trình đào tạo
              </Link>
            </li>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
              <Link to="/admin/student" className="nav-link">
                Danh sách sinh viên
              </Link>
            </li>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
              <Link to="/admin/lecturer" className="nav-link">
                Danh sách cố vấn học tập
              </Link>
            </li>

            <hr className="sidebar-divider my-0" />

            <li className="nav-item">
              <Link to="/admin/faculty" className="nav-link">
                Danh sách khoa
              </Link>
            </li>

            <hr className="sidebar-divider my-0" />
          </ul>
        </div>

        <div id="page-content-wrapper">
          <br />

          <div className="container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
}
