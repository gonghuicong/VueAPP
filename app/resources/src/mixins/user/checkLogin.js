import isEmpty from 'lodash/isEmpty';

export default {
  beforeMount () {
    console.log(this, 'b');
    if (isEmpty(this.user)) {
       this.$router.push({name: 'm.login'})
    }
  }
}


