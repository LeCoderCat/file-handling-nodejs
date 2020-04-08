//read/write on files
const fs = require('fs');


var rawtoday = new Date();
var formattoday = rawtoday.toDateString();
//////////CREATE/WRITE DAILY FILE/////////
function createftoday(){
	var filename = rawtoday.toDateString();
	var filepath = './trace/'+filename+'.json';
	fs.closeSync(fs.openSync(filepath, 'w'));
}

function writeToftoday(ftoday){
	let data = JSON.stringify(ftoday, null, 2);
	var filename = rawtoday.toDateString();
	var filepath = './trace/'+filename+'.json';
        fs.writeFileSync(filepath, data, (err) => {  
    if(err) return console.error(err);
	console.log('Data written to file');
        });
	console.log(JSON.stringify(ftoday, null, 2));

}

function readFromftoday(){
	var filename = rawtoday.toDateString();
	var filepath = './trace/'+filename+'.json';
	let rawdata = fs.readFileSync(filepath);  

	let ftoday = JSON.parse(rawdata);
	console.log('ftoday');
	return ftoday;
}

//////////READ/WRITE 5 DAYS CALC FILE/////////
function readFromcalc5(){
	let rawdata = fs.readFileSync('./files/calc5.json');  
	let calc5 = JSON.parse(rawdata);
	console.log('done');
	return calc5;
}

function writeTocalc5(calc5){
	let data = JSON.stringify(calc5, null, 2);
        fs.writeFileSync('./files/calc5.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
        });
	console.log(JSON.stringify(calc5, null, 2));
}

//READ BLANK
function readFromblank(){
	try {  
		let rawdata = fs.readFileSync('./files/blank.json', 'utf8');  
		let blank = JSON.parse(rawdata); 
		return blank;
	} catch(e){
		console.log('Error:', e.stack);
	}
}

//COPY BLANK TO DAILY
function writeblankToftoday(){
	console.log('Flint hears fillftoday');
	var blank = readFromblank();
	writeToftoday(blank);
}

//COPY BLANK TO CALC5
function writeblankTocalc5(){
	console.log('Flint hears WriteblankTocalc5');
	var blank = readFromblank();
	writeTocalc5(blank);
}

//READ FILES FROM EACH DAY
function readFromfiles(day){
	var rtoday = new Date();
	console.log('rtoday');
	var whichday = new Date(rtoday.setDate(rtoday.getDate() - day));
	console.log('rtoday');
	var filename = whichday.toDateString();
	console.log(filename);
	var filepath = './trace/'+filename+'.json';
	console.log(filepath);

	let rawdata = fs.readFileSync(filepath);  
	let data = JSON.parse(rawdata);

	return data;
}

//READ/WRITE BACKUP
function writeTobackup(backup){
	let data = JSON.stringify(backup, null, 2);
        fs.writeFileSync('./files/backup.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
        });
	console.log(JSON.stringify(backup, null, 2));
}

function readFrombackup(){
	let rawdata = fs.readFileSync('./files/backup.json');  
	let backup = JSON.parse(rawdata); 
return backup;

}

//Copy from FLUSH BACKUP
function writebackupTofbackup(fbackup){
	let data = JSON.stringify(fbackup, null, 2);
        fs.writeFileSync('./files/backup.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
        });
	//console.log(JSON.stringify(backup, null, 2));
}

//Read from FLUSH BACKUP
function readFromfbackup(){
	let rawdata = fs.readFileSync('./files/flushbackup.json');  
	let fbackup = JSON.parse(rawdata); 
return fbackup;

}

//READ/WRITE LASTSRS
function writeTolastSRS(lastSRs){
	let data = JSON.stringify(lastSRs, null, 2);
        fs.writeFileSync('./files/lastSRs.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
        });
	console.log(JSON.stringify(lastSRs, null, 2));
}

function readFromlastSRs(){
	let rawdata = fs.readFileSync('./files/lastSRs.json');  
	let lastSRS = JSON.parse(rawdata); 
return lastSRS;

}

//Copy FLUSH BACKUP TO LASTSRS
function writefbackupTolastSRs(fbackup){
	let data = JSON.stringify(fbackup, null, 2);
        fs.writeFileSync('./files/lastSRs.json', data, (err) => {  
    if (err) throw err;
    console.log('Data written to file');
        });
	console.log(JSON.stringify(fbackup, null, 2));
}

//Read from FBACKBUP
function readFromfbackup(){
	let rawdata = fs.readFileSync('./files/flushbackup.json');  
	let fbackup = JSON.parse(rawdata); 
return fbackup;

}