import React, { useState } from "react";

const App = () => {
    const [comments, setComments] = useState([
        { id: 1, text: "Comment 1" },
        { id: 2, text: "Comment 2" },
        { id: 3, text: "Comment 3" },
    ]);

    return (
        <div className="container">
            <h1>Hello, World!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, dignissimos?</p>

            {comments ? (
                <>
                    <h2>Comments ({comments.length})</h2>
                    <ul>
                        {comments.map((comment) => (
                            <li key={comment.id}>{comment.text}</li>
                        ))}
                    </ul>
                </>
            ) : (
                <p>No comments</p>
            )}
        </div>
    );
};

export default App;
