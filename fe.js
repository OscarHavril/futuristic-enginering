G.AddData({
name:'Futuristic Enginering',
author:'OscarHavril ',
desc:'A big mod that add a lot of various things',
engineVersion:1,
manifest:'https://rawgit.com/OscarHavril/futuristic-enginering/master/feManifest.js'
requires:['Default dataset*'],
sheets:{'feSheet':'https://raw.githubusercontent.com/Generatoror/hello-world/master/sprits.png'},//custom stylesheet (note : broken in IE and Edge for the time being) Note 2: Edit this too !
func:function()
{
new G.resCategories={
        'animals':{
            name:'Animals',
            base:[],
            side:['population','worker','happiness','health','land','coin'],
        },
 
new G.Tech({
        name:'[FE]Animals',
        desc:'@unlocks a new resource category: [animals], which can be stored with [farm]s',
        icon:[0,1,'feSheet'], //Edit
        cost:{'insight':15},
        req:{'hunting':true},
    });
 
new G.Tech({
        name:'[FE]Farming',
        desc:'@unlocks [farm]s, wich breeds some animals for food',
        icon:[0,1,'feSheet'], //Edit
        cost:{'insight':15},
        req:{'cooking':true},
    });
}
});
