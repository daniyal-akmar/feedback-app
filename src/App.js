import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import Header from "./Components/Header";
import FeedbackList from "./Components/FeedbackList";
import FeedbackStats from "./Components/FeedbackStats";
import feedbackData from "./Components/Data/feedbackData";
import FeedbackForm from "./Components/FeedbackForm";

const App = () => {
    const [feedback, setFeedback] = useState(feedbackData);

    const deleteFeedback = (id) => {
        setFeedback((prev) => prev.filter((item) => item.id !== id));
    };

    const addFeedback = (rating, text) => {
        // console.log(rating, text);
        const obj = {};

        obj.id = uuidv4();
        obj.rating = rating;
        obj.text = text;

        setFeedback((prev) => {
            return [obj, ...prev];
        });
    };

    return (
        <>
            <Header />
            <div className="container">
                <FeedbackForm addFeedback={addFeedback} />
                <FeedbackStats feedback={feedback} />
                <FeedbackList feedbackData={feedback} handleDelete={deleteFeedback} />
            </div>
        </>
    );
};

export default App;
