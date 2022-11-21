import '../style/UserProfile.css';
import React from "react";
import { useState } from 'react';
import * as loginSlice from '../feature/loginSlice';
import { useSelector } from 'react-redux';

function UserProfile() {
    const [profileForm, setProfileForm] = useState(false)
    const firstName = useSelector((state) => state.login.firstName)
    const lastName = useSelector((state) => state.login.lastName)
    console.log(firstName)

    return(
        <main className="main bg-dark">
            {!profileForm? (
                <div className="header">
                    <h1>Welcome back<br />{firstName + " " + lastName + "!"}</h1>
                    <button className="edit-button" onClick={() => setProfileForm(true)}>Edit Name</button>
                </div>
            ):(
                <div className="header">
                    <h1>Welcome back</h1>
                    <form>
                        <div>
                            <input type="text" id="edit-firstName" value={firstName}/>
                            <input type="text" id="edit-lastName" value={lastName}/>
                        </div>
                        <div className="form-buttons">
                            <button className="save-button">Save</button>
                            <button className="cancel-button" onClick={() => setProfileForm(false)}>Cancel</button>
                        </div>
                    </form>
                </div>
            )}
            <h2 className="sr-only">Accounts</h2>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Checking (x8349)</h3>
                <p className="account-amount">$2,082.79</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Savings (x6712)</h3>
                <p className="account-amount">$10,928.42</p>
                <p className="account-amount-description">Available Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            <section className="account">
                <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
                <p className="account-amount">$184.30</p>
                <p className="account-amount-description">Current Balance</p>
                </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
                </div>
            </section>
            </main>
    );
}

export default UserProfile;