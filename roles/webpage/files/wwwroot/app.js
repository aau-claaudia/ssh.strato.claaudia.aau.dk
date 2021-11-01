var app = new Vue({
    el: '#generator',
    data: {
        key: "",
        username: "",
        target: ""
    },
    computed: {
        templateKey() {
            if (this.key == "") {
                return "<key-path>"
            }
            return this.key
        },
        templateUsername() {
            if(this.username == "") {
                return "<user>"
            }
            return this.username
        },
        templateTarget() {
            if(this.target == "") {
                return "<target>"
            }
            return this.target
        }
    }
})