function quoteStrip(str) {
	/* Used RegEx .replace() to remove the quotation marks
	Simple and clean approach
	'\"' captures quote mark 
	'/g' grabs globally throughout string */
	return str.replace(/\"/g,'')
}	

