
document.querySelector('.input-email').addEventListener('blur', validateEmail);

function validateEmail() {
  const invalid = document.getElementById('invalid-feedback');
  const input = document.querySelector('.input-email');
  const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

  if (!re.test(input.value)){
    input.style.borderColor = '#ff2965';
    invalid.style.display = 'block';

  }else{
    invalid.style.display = 'none';
    input.style.borderColor = '#3EE9E5';
  }
}