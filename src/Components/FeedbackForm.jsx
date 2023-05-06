import React, { useState, useEffect } from "react";
import Card from "./Shared/Card";
import Button from "./Shared/Button";
import RatingSelect from "./RatingSelect";

const FeedbackForm = ({ addFeedback }) => {
    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [msg, setMsg] = useState("");

    useEffect(() => {
        if (reviewText === "") {
            setBtnDisabled(true);
            setMsg(null);
        } else if (reviewText !== "" && reviewText.trim().length <= 10) {
            setBtnDisabled(true);
            setMsg("Text must be atleast 10 characters");
        } else {
            setBtnDisabled(false);
            setMsg(null);
        }
    }, [reviewText]);

    const handleChange = (e) => {
        setReviewText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addFeedback(rating, reviewText);
        setReviewText("");
    };

    return (
        <Card>
            <h2>How would you rate your service with us?</h2>
            <form onSubmit={handleSubmit}>
                <RatingSelect select={(rating) => setRating(rating)} />
                <div className="input-group">
                    <input type="text" placeholder="Write a review" value={reviewText} onChange={handleChange} />
                    <Button type="submit" isDisabled={btnDisabled}>
                        Send
                    </Button>
                </div>
                {msg && <div className="">{msg}</div>}
            </form>
        </Card>
    );
};

export default FeedbackForm;
