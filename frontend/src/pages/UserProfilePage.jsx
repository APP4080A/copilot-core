// src/pages/ProfilePage.jsx

import React from 'react';
import userAvatar from '../assets/useravatar.jpg';

export default function ProfilePage({ profile }) {
    // Fallback values
    const {
        email = 'jdoe.copilot@example.com',
        username = 'jdoe.mobbin@gmail.com',
        avatar = '', // if empty, fallback will be used
        linkedAccounts = {
            google: 'jdoe.copilot@gmail.com',
            slack: '@jdoe-dev',
            jira: 'jdoe'
        }
    } = profile || {};

    return (
      <div className="d-flex flex-column min-vh-100 bg-light w-100">
            <main className="container-fluid w-100 px-3 px-md-5 py-4">
              <div className="row justify-content-center">
                <div className="col-12 col-xl-10"></div>
                <h2 className="mb-4 fw-bold">User Profile</h2>

                {/* Profile Header */}
                  <div className="card shadow-sm mb-3 p-4 d-flex flex-column align-items-center text-center">                    
                    <img
                        src={userAvatar}
                        alt="User Avatar"
                        className="rounded-circle mb-3"
                        style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                    />
                    <div>
                        <h4 className="fw-bold mb-1">{email}</h4>
                        <p className="text-muted small mb-2">{username}</p>
                        <button className="btn btn-outline-primary btn-sm mt-2">Edit Profile</button>
                    </div>
                </div>

                {/* Settings Sections */}
                <div className="row g-4">
                    {/* Account Settings */}
                        <div className="card shadow-sm mb-3 p-4 d-flex flex-column">
                            <h5 className="fw-bold mb-3">Account Settings</h5>
                            <div className="mb-3">
                                <i className="bi bi-lock me-2"></i>
                                <strong>Change Password</strong>
                            </div>
                            <div className="mb-3">
                                <i className="bi bi-shield-lock me-2"></i>
                                <strong>Two-Factor Authentication</strong>
                            </div>
                            <div className="text-danger">
                                <i className="bi bi-trash3 me-2"></i>
                                <strong>Delete Account</strong>
                            </div>
                        </div>

                    {/* Privacy + Linked Accounts */}
                    <div className="row g-4">
                      <div className="col d-flex flex-column gap-4">
                        <div className="card p-4 shadow-sm h-100">
                            <h5 className="fw-bold mb-3">Privacy Settings</h5>
                            <div className="form-check mb-2">
                                <input className="form-check-input" type="checkbox" id="dataSharing" />
                                <label className="form-check-label" htmlFor="dataSharing">
                                    Allow data sharing with third-party partners
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="adsPersonalization" defaultChecked />
                                <label className="form-check-label" htmlFor="adsPersonalization">
                                    Receive personalized advertisements
                                </label>
                            </div>
                        </div>
                      </div>

                        {/* Linked Accounts */}
                        <div className="col-12 col-md-6">
                        <div className="card p-4 shadow-sm h-100">
                            <h5 className="fw-bold mb-3">Linked Accounts</h5>
                            {Object.entries(linkedAccounts).map(([platform, account], idx) => (
                                <div className="d-flex justify-content-between align-items-center mb-2" key={idx}>
                                    <span className="fw-semibold text-capitalize">{platform}</span>
                                    <span className="text-muted small">{account}</span>
                                    <button className="btn btn-sm btn-outline-danger">Disconnect</button>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </main>
          </div>  
    );
}
