import React, { useState, useEffect } from "react";

const App = () => {
    const [links, setLinks] = useState([]);

    useEffect(() => {
        fetch("/link")
        .then(res => res.json())
        .then(data => {
            setLinks(data);
    });
}, []);

    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Link</th>
                </tr>
            </thead>
            <tbody>
                {links.map(link => (
                    <tr key={link._id}>
                        <td>{link.title}</td>
                        <td>{link.link}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default App;