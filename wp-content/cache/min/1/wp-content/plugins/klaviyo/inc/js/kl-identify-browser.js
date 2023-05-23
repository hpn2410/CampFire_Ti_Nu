function klIdentifyBrowser(klUser) {
    var _learnq = window._learnq || [];
    if (klUser.current_user_email) {
        _learnq.push(["identify", {
            "$email": klUser.current_user_email
        }])
    } else {
        if (klUser.commenter_email) {
            _learnq.push(["identify", {
                "$email": klUser.commenter_email
            }])
        }
    }
}
window.addEventListener("load", function() {
    klIdentifyBrowser(klUser)
})