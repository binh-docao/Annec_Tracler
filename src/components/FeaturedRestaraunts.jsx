import React, { useEffect, useState } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

const FeaturedRestaurants = () => {
    const [restaurants, setRestaurants] = useState([]);
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:4000/api/restaurant') 
        .then(response => {
            if (!response.ok) {
                response.text().then(text => console.log(text));
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => setRestaurants(data))
        .catch(error => console.log('Fetching restaurants failed: ', error));
    }, []);

    useEffect(() => {
        if (selectedRestaurant) {
            fetch(`http://localhost:4000/api/review/${selectedRestaurant._id}`)
            .then(response => {
                if (!response.ok) {
                    response.text().then(text => console.log(text));
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setReviews(data))
            .catch(error => console.log('Fetching reviews failed: ', error));
        }
    }, [selectedRestaurant]);
    

    const [showReviewForm, setShowReviewForm] = useState(false);
    const [reviewedRestaurant, setReviewedRestaurant] = useState(null);

    const submitReview = (event) => {
        event.preventDefault();
    
        const ratingInput = event.target.elements[0];
        const reviewTextInput = event.target.elements[1];
    
        const reviewData = {
            user: '64c976aae1c690b237b3a9b2',  // HARD CODED TO USER - BINH
            restaurant: reviewedRestaurant._id,
            rating: ratingInput.value,
            reviewText: reviewTextInput.value
        };
    
        fetch(`http://localhost:4000/api/review/${reviewedRestaurant._id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            console.log('Review successfully submitted:', data);
            setReviews(reviews => [...reviews, data]);
            setShowReviewForm(false);
            setReviewedRestaurant(null); // Reset reviewedRestaurant state after submitting review
        })
        .catch(error => console.error('Posting review failed:', error));
    };
    
    
    

    const handleWriteReview = (restaurant) => {
        setReviewedRestaurant(restaurant);
        setShowReviewForm(true);
    }

    return (
        <div className="container" style={{ padding: '5vh' }}>
            

            {restaurants.map(restaurant => (
                <Card key={restaurant._id} style={{ marginBottom: "20px" }}>
                    <Card.Body>
                        <Card.Title>{restaurant.name}</Card.Title>
                        <Card.Text>{restaurant.address}</Card.Text>
                        <Button variant="dark" onClick={() => setSelectedRestaurant(restaurant)}>Details</Button>
                        <Button variant="dark" onClick={() => handleWriteReview(restaurant)} style={{ marginLeft: '10px' }}>Write Review</Button>
                    </Card.Body>
                </Card>
            ))}
            {selectedRestaurant && (
                <Modal show onHide={() => { setSelectedRestaurant(null); setReviews([]); }}>
                    <Modal.Header closeButton>
                        <Modal.Title>{selectedRestaurant.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Address: {selectedRestaurant.address}</p>
                        {reviews && reviews.length > 0 ? (
                            <>
                                <h5>Reviews:</h5>
                                <ul>
                                    {reviews.map((review, index) => (
                                        <li key={index}>
                                            {/* <p><strong>User:</strong> {review.user.username}</p> */}
                                            <p><strong>Rating (out of 5):</strong> {review.rating}</p>
                                            <p><strong>Review:</strong> {review.reviewText}</p>
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p>No reviews found for this restaurant.</p>
                        )}
                    </Modal.Body>
                </Modal>
            )}

            <Modal show={showReviewForm} onHide={() => setShowReviewForm(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Write a Review</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={submitReview}>
                        <div className="form-group">
                            <input type="number" placeholder="Rating" min="0" max="5" className="form-control mb-2" required />
                            <textarea placeholder="Review" className="form-control mb-2" required />
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </div>
                    </form>
                </Modal.Body>

            </Modal>
        </div>
    );
}

export default FeaturedRestaurants;
