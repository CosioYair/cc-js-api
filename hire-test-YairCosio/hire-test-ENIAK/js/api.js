class Api {
    constructor() {
        this.sitKey = 'ONE-AUUOH7T6PE-6701';
        this.url = 'https://www.thunderhead.com/';
        window[this.sitKey];
    }

    sendInteraction(email) {
        return window[this.sitKey].sendInteraction(this.url, {
            key: email
        });
    }

    processImage(res) {
        return window[this.sitKey].processResponse(res, true, 0);
    }
}