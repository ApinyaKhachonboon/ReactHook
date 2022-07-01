import React, { useState } from 'react'

export default function UseStateDemo2() {
    const intialState = { username: "", password: "" };
    const [account, setAccount] = useState(intialState);
    return (
        <div>
            <form>
                <p>#Debug {JSON.stringify(account)}</p>
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
                    alert(JSON.stringify(account));
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
        </div>
    )
}
