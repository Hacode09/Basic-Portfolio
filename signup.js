function login() {
    var name = document.getElementById('name').value;
    var gmail = document.getElementById('gmail').value;

    if (name && gmail) {
        location.assign('http://127.0.0.1:5502/done.html')
    } else {
        window.alert('Wrong name and Gmail');
    }
}