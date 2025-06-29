document.getElementById('signupForm')?.addEventListener('submit',function(e){
e.preventDefault();const n=document.getElementById('name').value.trim();
const m=document.getElementById('email').value.trim();
if(n && m){document.getElementById('message').textContent='Thank you for signing up, '+n+'!';
setTimeout(()=>{window.location.href='dashboard.html';},2000);}});
document.getElementById('withdrawForm')?.addEventListener('submit',function(e){
e.preventDefault();const a=parseInt(document.getElementById('amount').value);
if(a>=10&&a<=90){document.getElementById('withdrawMessage').textContent='Withdrawal of $'+a+' received.';
setTimeout(()=>{alert('Withdrawal complete!');window.location.href='dashboard.html';},2000);}
else{document.getElementById('withdrawMessage').textContent='Enter amount between $10 and $90.';}});