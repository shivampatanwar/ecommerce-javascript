
// Customer Signup 















document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById('customer-signup-form');

    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }
});

function handleSignup(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const customerData = Object.fromEntries(formData.entries());

    // Validate customer data
    if (!validateCustomerData(customerData)) {
        return;
    }

    // Send signup request to server
    fetch('/api/customer/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                showSuccessMessage('Signup successful! Please check your email to verify your account.');
                resetForm(event.target);
            } else {
                showErrorMessage(data.message || 'Signup failed. Please try again.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showErrorMessage('An error occurred. Please try again later.');
        });
}

function validateCustomerData(data) {
    // Check if all required fields are present
    const requiredFields = ['name', 'email', 'password', 'confirmPassword'];
    for (const field of requiredFields) {
        if (!data[field] || data[field].trim() === '') {
            showErrorMessage(`${field.charAt(0).toUpperCase() + field.slice(1)} is required.`);
            return false;
        }
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showErrorMessage('Please enter a valid email address.');
        return false;
    }

    // Validate password strength
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(data.password)) {
        showErrorMessage('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
        return false;
    }


    // Validate name
    const nameRegex = /^[a-zA-Z\s]{2,50}$/;
    if (!nameRegex.test(data.name)) {
        showErrorMessage('Name must be between 2 and 50 characters long and contain only letters and spaces.');
        return false;
    }


    // Check if passwords match
    if (data.password !== data.confirmPassword) {
        showErrorMessage('Passwords do not match.');
        return false;
    }

    return true;

    return true;
}

function showSuccessMessage(message) {
    const messageElement = document.getElementById('signup-message');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = 'success-message';
    }
}

function showErrorMessage(message) {
    const messageElement = document.getElementById('signup-message');
    if (messageElement) {
        messageElement.textContent = message;
        messageElement.className = 'error-message';
    }
}

function resetForm(form) {
    form.reset();
}
