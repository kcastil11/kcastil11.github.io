const options={weekday:'long', day: 'numeric', month: 'long', year:'numeric'};
document.getElementById('upDate').textContent=new Date().toLocaleDateString('en-US', options);