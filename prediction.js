document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission
        
        // Get form input values
        const age = parseFloat(document.getElementById('age').value);
        const potential = parseFloat(document.getElementById('potential').value);
        const height = parseFloat(document.getElementById('height_cm').value);
        const weight = parseFloat(document.getElementById('weight_kgs').value);
        const crossing = parseFloat(document.getElementById('crossing').value);
        const finishing = parseFloat(document.getElementById('finishing').value);
        const dribbling = parseFloat(document.getElementById('dribbling').value);
        const preferredFoot = document.getElementById('preferred_foot').value;
        const clubRating = parseFloat(document.getElementById('club_rating').value);
        
        // Calculate overall rating based on the input features
        const overallRating = calculateOverallRating(age, potential, height, weight, crossing, finishing, dribbling, preferredFoot, clubRating);
        
        // Display the predicted overall rating
        document.getElementById('prediction-result').innerText = `Predicted Overall Rating: ${overallRating.toFixed(2)}`;
    }
    
    // Function to calculate overall rating
    function calculateOverallRating(age, potential, height, weight, crossing, finishing, dribbling, preferredFoot, clubRating) {
        // Perform your calculation here based on the input features
        // For demonstration purposes, a simple linear combination is used
        let overallRating = 0.5 * age + 0.8 * potential + 0.2 * height + 0.3 * weight + 0.6 * crossing + 0.7 * finishing + 0.5 * dribbling + (preferredFoot === 'Right' ? 1 : 0) + 0.9 * clubRating;
        
        // Return the calculated overall rating
        return overallRating;
    }
    
    // Add event listener to the form submit button
    document.getElementById('prediction-form').addEventListener('submit', handleSubmit);
});
