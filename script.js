// Get the form and the last modified span element
const form = document.querySelector('form');
const lastModifiedSpan = document.getElementById('lastModified');

// Function to format the date and display it
function displayLastModified() {
    const lastModifiedDate = new Date(document.lastModified);
    const formattedDate = lastModifiedDate.toLocaleString();
    lastModifiedSpan.textContent = formattedDate;
}

// Display the last modified date when the page loads
displayLastModified();

// Event listener for form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Create a new FormData object to gather form inputs
    const formData = new FormData(form);

    // Extract values from the form
    const adjective = formData.get('adjective');
    const noun = formData.get('noun');
    const verb = formData.get('verb');
    const adverb = formData.get('adverb');
    const pluralNoun = formData.get('pluralNoun');

    // Generate the mad lib story
    const madLibStory = `
        Once upon a time, there was a ${adjective} ${noun} who loved to ${verb} ${adverb}.
        One day, they encountered a group of ${pluralNoun} that changed their life forever.
    `;

    // Display the mad lib story in a new div element
    const storyDiv = document.createElement('div');
    storyDiv.innerHTML = `
        <h2>Your Mad Lib Story</h2>
        <p>${madLibStory}</p>
    `;

    // Append the story to the body
    document.body.appendChild(storyDiv);
});
