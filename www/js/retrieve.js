function getcurr() {
	var time = new Date();
	return time.getFullYear()+'-'+time.getMonth()+'-'+time.getDate();
}
if (!localStorage.getItem('lia-date')) {
	localStorage.setItem('lia-date', 1);
}
if (!localStorage.getItem('lia-last')) {
	localStorage.setItem('lia-last', getcurr());
}
function getdate() {
	return localStorage.getItem('lia-date');
}
function getlast() {

}
var c = getdate();
function geturl(o) {
	return 'https://liadevs.github.io/content/'+c+'/'+o;
}
function setdate(n) {
	c = n;
}
function update() {
	if (getcurr() != localStorage.getItem('lia-last')) {
		localStorage.setItem('lia-last', getcurr());
		localStorage.setItem('lia-date', localStorage.getItem('lia-date')+1);
	}
}