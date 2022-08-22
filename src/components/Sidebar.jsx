import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="main-sidebar sidebar-style-2">
      <aside id="sidebar-wrapper">
        <div className="sidebar-brand">
          <a href="index.html"> <img alt="pic" src="/assets/img/logo.png" className="header-logo" /> <span
            className="logo-name">Otika</span>
          </a>
        </div>
        <ul className="sidebar-menu">
          <li className="menu-header">Main</li>
          <li className="dropdown">
            <a href="index.html" className="nav-link"><i data-feather="monitor" className></i><span>Dashboard</span></a>
          </li>
          <li className="dropdown">
            <a href="!#" className="menu-toggle nav-link has-dropdown"><i
              data-feather="briefcase"></i><span>Orders</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="widget-data.html">Pending Orders</a></li>
              <li><a className="nav-link" href="widget-chart.html">Completed Orders</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="!#" className="menu-toggle nav-link has-dropdown"><i data-feather="command"></i><span>Profile</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="chat.html">Edit Profile</a></li>
              <li><a className="nav-link" href="portfolio.html">Withdrawal Information</a></li>
              <li><a className="nav-link" href="blog.html">Identity Verification</a></li>
            </ul>
          </li>
          <li className="dropdown">
            <a href="!#" className="menu-toggle nav-link has-dropdown"><i data-feather="mail"></i><span>Notifications</span></a>
            <ul className="dropdown-menu">
              <li><a className="nav-link" href="email-inbox.html">Inbox</a></li>
              <li><a className="nav-link" href="email-compose.html">Compose</a></li>
              <li><a className="nav-link" href="email-read.html">read</a></li>
            </ul>
          </li>
          
        </ul>
      </aside>
    </div>
  );
}

export default Sidebar;