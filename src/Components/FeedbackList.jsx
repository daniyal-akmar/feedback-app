import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

const FeedbackList = ({ feedbackData, handleDelete }) => {
    if (!feedbackData || feedbackData.length === 0) {
        return <p style={{ textAlign: "center" }}>No feedback!</p>;
    }

    return (
        <div className="feedback-list">
            {feedbackData.map((item) => (
                <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
            ))}
        </div>
    );
};

FeedbackList.propTypes = {
    feedbackData: PropTypes.array.isRequired,
};

export default FeedbackList;
