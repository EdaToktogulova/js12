document.querySelector('input[type="text"]')
.addEventListener('focus', function () {
   this.style.borderColor = "initial";
});
document.querySelector('input[type="text"]' )
.addEventListener('blur', function () {
   if (!this.valie) {
      this.style.borderColor = "red";
   }
});

document.querySelector('input[type="text"]')
.addEventListener('change', function () {
   alert('Change')
});

document.querySelector('input[type="checkbox"]' )
.addEventListener('blur', function () {
   if (!this.valie) {
      alert
   }
});

document.querySelector('input[type="checkbox"]')
.addEventListener('change', function () {
   alert('Change')
});
