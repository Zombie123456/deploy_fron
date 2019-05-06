import Vue from 'vue'

export default {
    methods: {
        inputStatus (input, name) {
            let valid = input.valid
            if (!valid) {
                Vue.set(this.iconType, name, 'error')
            } else if (valid) {
                Vue.set(this.iconType, name, 'success')
            } else {
                Vue.set(this.iconType, name, '')
            }
        }
    }
}
