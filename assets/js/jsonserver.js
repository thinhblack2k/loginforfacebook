var courseApi = 'http://localhost:3000/account';
function start() {
    handleCreateForm();
}
start();

/**
 * Thêm mới tài khoản
 * Author: THINHDH (02/05/2023) 
 */
function createAccount(data) {
    var option = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
          },
    };
    fetch(courseApi, option)
        .then(function(response) {
            response.json();
        })
        .then(function() {

        });
}

/**
 * Xử form thêm mới tài khoản
 * Author: THINHDH (02/05/2023) 
 */
function handleCreateForm() {
    var createBtn = document.querySelector('#create');

    createBtn.onclick = function() {
        var name = document.querySelector('input[name="name"]').value;
        var password = document.querySelector('input[name="password"]').value;
        
        var formData = {
            name: name,
            password: password
        }

        createAccount(formData);

        alert('Thêm mới thành công');
    }
}