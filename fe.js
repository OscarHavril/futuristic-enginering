G.AddData({
name:'Futuristic Enginering',
author:'OscarHavril ',
desc:'A big mod that add a lot of various things',
engineVersion:1,
manifest:'https://rawgit.com/OscarHavril/futuristic-enginering/master/feManifest.js',
requires:['Default dataset*'],
sheets:{'feSheet':'https://raw.githubusercontent.com/Generatoror/hello-world/master/sprits.png'},//custom stylesheet (note : broken in IE and Edge for the time being) Note 2: Edit this too !
func:function()
{

	G.resCategories={
		'main':{
			name:'Essentials',
			base:[],
			side:['population','worker','happiness','health','land','coin'],
		},
		'demog':{
			name:'Demographics',
			base:['baby','child','adult','elder','worker','sick','wounded'],
			side:['population','housing','corpse','burial spot'],
		},
		'food':{
			name:'Food & Water',
			base:[],
			side:['food','spoiled food','water','muddy water','food storage'],
		},
		'build':{
			name:'Crafting & Construction',
			base:[],
			side:['archaic building materials','basic building materials','advanced building materials','precious building materials','material storage'],
		},
		'gear':{
			name:'Gear',
			base:[],
			side:[],
		},
		'misc':{
			name:'Miscellaneous',
			base:[],
		},
                'animals':{
                        name:'Animals',
                        base:[],
                },
	};


 
new G.Tech({
        name:'eFEeAnimals',
        desc:'@unlocks a new resource category: [animals], which can be stored with [farm]s',
        icon:[0,1,'feSheet'], //Edit
        cost:{'insight':15},
        req:{'hunting':true},
    });
 
new G.Tech({
        name:'eFEeFarming',
        desc:'@unlocks [farm]s, wich breeds some animals for food',
        icon:[0,1,'feSheet'], //Edit
        cost:{'insight':15},
        req:{'cooking':true},
    });
	new G.Unit({
		name:'Farm',
		desc:'@forages for basic [food], [water] and [archaic building materials,Various interesting things]<>A vital part of an early tribe, [gatherer]s venture in the wilderness to gather food, wood, and other things of note.',
		icon:[0,2,'feSheet'],
		cost:{},
		use:{'worker':1},
		//upkeep:{'food':0.2},
		//alternateUpkeep:{'food':'spoiled food'},
		effects:[
			{type:'gather',context:'gather',amount:2,max:4},//,multMax:{'leather pouches':1.1}//TODO
			//{type:'gather',context:'gather',what:{'water':1,'muddy water':1},amount:1,max:3,req:{'gathering focus':'water'}},
			{type:'gather',context:'gather',what:{'water':1,'muddy water':1},amount:1,max:3},
			{type:'gather',context:'gather',what:{'herb':0.5,'fruit':0.5},amount:1,max:1,req:{'plant lore':true}},
		],
		req:{'eFEeAnimals':true},
		category:'production',
		priority:10,
	});
}
});
