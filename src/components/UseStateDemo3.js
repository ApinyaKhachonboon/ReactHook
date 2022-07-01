import React, { useState } from 'react'

export default function UseStateDemo3() {
    const intialState = { username: "", password: "" };
    const [account, setAccount] = useState(intialState);
    const [accountList, setAccountList] = useState([]);
    return (
        <div>
            <form>
                {/* <p>#Debug {JSON.stringify(account)}</p> */}
                <p>#Debug {JSON.stringify(accountList)}</p>
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Username"
                    value={account.username}
                    onChange={e => {
                        setAccount({ ...account, username: e.target.value })
                    }} />
                <br />
                <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Password"
                    value={account.password}
                    onChange={e => {
                        setAccount({ ...account, password: e.target.value })
                    }} />
                <br />
                <button onClick={e => {
                    e.preventDefault();
                    setAccountList([...accountList, { ...account, index: accountList.length }]);
                }
                }>
                    Submit
                </button>
                <button onClick={e => {
                    e.preventDefault();
                    setAccount(intialState);
                }}>
                    Clear
                </button>
            </form>

            <ul>
                {accountList.map(item => <li key={item.index}> Username: {item.username}, Password: {item.password} </li>)}
            </ul>
        </div>
    )
}
