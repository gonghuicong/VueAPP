<script type="text/babel">
  import { Field , Button, Cell, Toast } from 'mint-ui';
  import { mapState, mapActions } from 'vuex';
  import { ADD_PACKAGE_USER } from '../../store';

  export default{
    components: {
      [Field.name]: Field,
      [Button.name]: Button,
      [Cell.name]: Cell,
      [Toast.name]: Toast
    },
    data() {
      return {
        form: {
          name: '',
          phone: '',
          address: ''
        }
      }
    },
    methods: {
      ...mapActions({
        addPackageUser: ADD_PACKAGE_USER,
      }),
      submit() {
        if (this.form.name == '') {
          return Toast({
            message: '请求输入您的姓名',
            position: 'bottom',
            duration: 3000
          })
        }
        if (this.form.phone == '') {
          return Toast({
            message: '请求输入您的联系电话',
            position: 'bottom',
            duration: 3000
          })
        }
        if (this.form.address == '') {
          return Toast({
            message: '请求输入您的地址',
            position: 'bottom',
            duration: 3000
          })
        }
        this.addPackageUser({
          data: {
            package: {
              user: this.form
            }
          }
        })
          .then(({ data }) => {
            let id = data.datas.custom_id;
            this.$router.push('/m/seller/package/user/' + id);
          })
      }
    }
  };
</script>

<style scoped>

</style>

<template>
  <div>
    <mt-cell title="请输入用户信息" style="font-weight: bold;"></mt-cell>
    <div class="mb20">
      <mt-field label="用户名称" placeholder="请输入用户真实姓名" v-model="form.name"></mt-field>
      <mt-field label="联系电话" placeholder="请输入用户联系电话" v-model="form.phone"></mt-field>
      <mt-field label="用户地址" placeholder="请输入用户地址" v-model="form.address"></mt-field>
    </div>
    <div class="pl10 pr10">
        <mt-button type="primary" size="large" plain @click="submit">提交并开始选材</mt-button>
    </div>
  </div>
</template>