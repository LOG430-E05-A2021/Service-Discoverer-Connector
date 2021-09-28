let Connector = require('./Connector')

let connexion = new Connector('http://log430a21.crabdance.com','localhost',3000,'testApp');

(async()=>{
    let registered = await connexion.register()
    let unregistered = await connexion.unregister()
    let apps = await connexion.getAppInstance('SERVICE-DISCOVERY')

    console.log(`registration : ${registered}`)
    console.log(`unregistration : ${unregistered}`)
    console.log(`GET SERVICE DISCOVERY : ${apps}`)
})




