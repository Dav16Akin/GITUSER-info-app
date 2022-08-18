class gitHubInfo {
    constructor () {
        this.client_id = 'dd3b2a3fbb2209871f75'
        this.client_secret = 'e9b0e9d632bbb80e75840993bc62ac7dd6cb9457'
    }


    async getUser (user) {
        const userResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repo = await fetch(`https://api.github.com/users/${user}/repos`)
        
        const userResponseData = await userResponse.json();

        const repoData = await repo.json();

        return {
            userResponseData,
            repoData
        }
    }
} 