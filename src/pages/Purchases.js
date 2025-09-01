import React from "react";
import "./Purchases.css";

export default function Purchases() {
  return (
    <div className="page">
      {/* Top Navbar */}
      <header className="navbar">
        <h1 className="logo">Supplier Billing Area</h1>
        <nav className="nav-links">
          <a href="#">Purchase Orders</a>
          <a href="#">Vendor Proposals</a>
          <a href="#">Vendors</a>
          <a href="#">Contacts/Addresses</a>
          <a href="#">Invoices</a>
        </nav>
      </header>

      {/* Tabs */}
      <div className="tabs">
        <button className="active">Payable Area</button>
        <button>Reports</button>
        <button>Dashboard</button>
      </div>

      <main className="main-grid">
        {/* Payable Area Section */}
        <div className="card">
          <h2>Payable Area</h2>
          <div className="grid-icons">
            <div className="icon-box blue">
              <span>➕</span>
              <p>Create Purchase Order</p>
            </div>
            <div className="icon-box red">
              <span>📋</span>
              <p>Purchase Order List</p>
            </div>
            <div className="icon-box blue">
              <span>🧾</span>
              <p>Create Purchase Invoice</p>
            </div>
            <div className="icon-box green">
              <span>📑</span>
              <p>Purchase Invoice List</p>
            </div>
            <div className="icon-box blue">
              <span>👤</span>
              <p>Create Vendor</p>
            </div>
            <div className="icon-box orange">
              <span>👥</span>
              <p>Vendor List</p>
            </div>
            <div className="icon-box yellow">
              <span>📄</span>
              <p>List Invoices</p>
            </div>
            <div className="icon-box purple">
              <span>📊</span>
              <p>Aging Summary</p>
            </div>
          </div>
        </div>

        {/* Chart Section (static image replacement) */}
        <div className="card">
          <h2>Statistics - Vendor Invoice</h2>
          <div className="chart">
            <div className="pie"></div>
            <ul className="legend">
              <li><span className="dot blue"></span> Draft</li>
              <li><span className="dot lightblue"></span> Started</li>
              <li><span className="dot darkblue"></span> Paid</li>
              <li><span className="dot purple"></span> Closed</li>
            </ul>
          </div>
        </div>
      </main>

      {/* Settings */}
      <div className="card settings">
        <h2>Settings</h2>
        <div className="settings-item">
          <span>⚙️</span>
          <p>Vendors - Tags/Categories</p>
        </div>
      </div>
    </div>
  );
}
