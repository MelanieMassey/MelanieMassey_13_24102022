import '../style/UserProfile.css';
import React from "react";
import { useState } from 'react';
import * as loginSlice from '../feature/loginSlice';
import { useDispatch, useSelector } from 'react-redux';
import { editUserInfo } from '../api/apiCalls';

function UserProfile() {
    const [profileForm, setProfileForm] = useState(false)
    const [firstName, setFirstName]=useState()
    const [lastName, setLastName]=useState()
    const stateFirstName = useSelector((state) => state.firstName)
    const stateLastName = useSelector((state) => state.lastName)
    const stateToken = useSelector((state) => state.token)
    const dispatch = useDispatch()

    console.log(firstName + " " + lastName)
    
    async function editProfile(){
        const newUserInfo = await editUserInfo(stateToken, {firstName, lastName})
        dispatch(loginSlice.getUser({firstName:newUserInfo.firstName, lastName:newUserInfo.lastName}))
        setProfileForm(false)
    }

    return(
        <main className="main bg-dark">
            {!profileForm? (
                <div className="header">
                    <h1>Welcome back<br />{stateFirstName + " " + stateLastName + "!"}</h1>
                    <button className="edit-button" onClick={() => setProfileForm(true)}>Edit Name</button>
                </div>
            ):(
                <div className="header">
                    <h1>Welcome back</h1>
                    <div>
                        <div>
                            <input type="text" id="edit-firstName" defaultValue={stateFirstName} onChange={(e) => setFirstName(e.target.value)}/>
                            <input type="text" id="edit-lastName" defaultValue={stateLastName} onChange={(e) => setLastName(e.target.value)}/>
                        </div>
                        <div className="form-buttons">
                            <button className="save-button" onClick={() => editProfile()}>Save</button>
                            <button className="cancel-button" onClick={() => setProfileForm(false)}>Cancel</button>
                        </div>
                    </div>
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