var names=new Array();
names[0]="Yaakov";
names[1]="John";
names[2]="Emma";
names[3]="jason";
names[4]="Amelia";
names[5]="Sophia";
names[6]="larry";
names[7]="Mia";
names[8]="Luna";
names[9]="jim";


for (var i = 0; i < names.length; i++) {
	if(names[i].charAt(0)==='J'|| names[i].charAt(0)==='j'){
        console.log("Goodbye "+ names[i])
	}
	else{
		console.log("Hello "+ names[i])
	}
}