function login() {
    var name = document.getElementById('name').value;
    var gmail = document.getElementById('gmail').value;

    if (name && gmail) {
        location.assign('./done.html')
    } else {
        window.alert('Wrong name and Gmail');
    }
}