const axios = require('axios')

class Connector{
    constructor(serverIp,appIp,appPort,appName,healthUrl='/healthcheck'){
        this.serverIp = serverIp
        this.appIp = appIp
        this.appPort = appPort
        this.appName = appName
        this.healthUrl = healthUrl
    }

    register() {
        let value = Animation
        .then( (response) => {
          return true
        })
        .catch( (error) => {
            console.log(error)
            return false
        })
    }

    unregister() {
        axios.post(`${this.serverIp}/unregister`,{name:this.appName,hostname:this.appIp,port:this.appPort,healthUrl:this.healthUrl})
        .then( (response) => {
            return true
          })
          .catch( (error) => {
              console.log(error)
              return false
          })
    }

    getAppInstance(appId){
        axios.get(`${this.serverIp}/${appId}`)
        .then( (response) => {
            return response.data
        }).catch( (error) => {
            console.log(error)
            return []
        })
    }
}

module.exports = Connector

/**
 * 
 * let boolPassed = await axios.post(`${this.serverIp}/register`,{name:{name},hostname:{hostname},port:{port},[healthUrl:{healthUrl}]})
 * let boolPassed = await axios.post(`${this.serverIp}/unregister`,{name:{name},hostname:{hostname},port:{port},[healthUrl:{healthUrl}]})
 * let appArray = await axios.get(`${this.serverIp}/${appId}`)
 * 
 */