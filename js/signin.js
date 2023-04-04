const form =  document.getElementById('form');
const id = document.getElementById('id');
const password = document.getElementById('password');

form.addEventListener('summit', e => {
   e.preventDefault(); /* 양식이 제출 되는 것을 방지하기 위해 이벤트에 pre-- 메서드를 호출. */

   validateInputs();
});

function validateInputs() {
    const idvalue = idvalue.value.trim();
    const passwordValue = password.value.trim();

    if (idvalue === '') {
        setError(id, 'id is required');
    } else {
        setSuccess(id);
    }

    if (passwordValue === '') {
        setError(password, 'password is required');
    } else if (passwordValue.length < 8) {
        setError(password, 'password must be at least 8 character.')
    } else {
        setSuccess(password);
    }
}