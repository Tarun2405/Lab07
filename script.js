// Get the form element
const form = document.getElementById('madLibForm');

// Event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data using FormData API
    const formData = new FormData(form);
    const adjective = formData.get('adjective');
    const noun = formData.get('noun');
    const verb = formData.get('verb');
    const adverb = formData.get('adverb');
    const pluralNoun = formData.get('pluralNoun');

    // Check if all fields are filled
    if (!adjective || !noun || !verb || !adverb || !pluralNoun) {
        alert("Please fill out all the fields!");
        return;
    }

    // Create the Mad Lib story
    const madLib = `
        Once upon a time, there was a very ${adjective} ${noun} who loved to ${verb} ${adverb}.
        They had a group of ${pluralNoun} that always joined them on their adventures.
    `;

    // Display the result below the form
    const resultDiv = document.createElement('div');
    resultDiv.style.marginTop = '20px';
    resultDiv.innerHTML = `
        <h2>Your Mad Lib Story</h2>
        <p>${madLib}</p>
        <button onclick="window.location.reload()">Create Another Mad Lib</button>
    `;

    // Append the result to the body
    document.body.appendChild(resultDiv);

    // Scroll to the result section
    resultDiv.scrollIntoView({ behavior: 'smooth' });
});

// Set the last updated date
const lastUpdated = document.getElementById('lastModified');
lastUpdated.textContent = document.lastModified;
