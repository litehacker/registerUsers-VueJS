const app = Vue.createApp({
    data(){
        return {
            title: 'მომხმარებლები',
            urlUsers:'http://localhost:3000/users',
            momxmareblebi: [],
            errors:[]
        }
    },
    async mounted(){
        try {
            const response = await fetch(this.urlUsers)
            const result = await response.json()
            console.log(result.users)
            this.momxmareblebi.push(...result.users)
            
            console.log(this.momxmareblebi)
            console.log(JSON.parse(JSON.stringify(this.momxmareblebi)))
        }
        catch (error){
            this.errors.push(error)
        }
        

    }
})