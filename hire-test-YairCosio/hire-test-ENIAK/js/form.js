class Form {
    constructor() {
        this.email = '';
        this.sentEmails = [];
        this.emailInput = document.getElementById('email-address');
        this.notificationLabel = document.getElementById('notification-message');
        this.submitButton = document.getElementById('submit');

        this.addListeners();
    }

    addListeners() {
        this.emailInput.addEventListener('input', () => {
            this.email = this.emailInput.value;
        });
        this.submitButton.addEventListener('click', () => {
            this.getImage();
        });
    }

    validateEmail() {
        const validFormat = this.emailInput.validity.valid && this.email.length > 0;
        const repeatedEmail = this.sentEmails.find(item => item === this.email);
        if (!validFormat) {
            this.notificationLabel.innerHTML = 'Please enter a valid email';
        }
        else if (repeatedEmail) {
            this.notificationLabel.innerHTML = 'Email already registered';
        }

        return validFormat && !repeatedEmail;
    }

    getImage() {
        const validForm = this.validateEmail();
        if (validForm) {
            api.sendInteraction(this.email).then((res) => {
                api.processImage(res).then(() => {
                    this.sentEmails.push(this.email);
                    this.notificationLabel.innerHTML = '';
                    this.emailInput.value = '';
                });
            }).catch(() => {
                this.notificationLabel.innerHTML = 'There is a problem with the server, please try again later';
            });
        }
    }
}