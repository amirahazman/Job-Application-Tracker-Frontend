<template>
    <div class="row">
        <div class="col-lg-12">
            <card class="card-login">
                <div class="row">
                    <div class="col-lg-12">
                        <h1 class="login-header">Login</h1>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <span class="text-header">Username</span>
                        <el-input v-model="form.name" placeholder="Username"/>
                    </div>
                </div>
                <br />
                <div class="row">
                    <div class="col-lg-12">
                        <span class="text-header">Password</span>
                        <el-input type="password" v-model="form.password" placeholder="Password"/>
                    </div>
                </div>
                <br />
                <br />
                <div class="row">
                    <div class="col-lg-12">
                        <el-button class="button-login">Login</el-button>
                    </div>
                </div>
            </card>
        </div>
    </div>
</template>

<script>
import { ElInput } from 'element-plus';

export default {
    name: "Login",
    components: {
        ElInput
    },
    data(){
        return {
            form: {
                name: "",
                password: ""
            }
        }
    }
}
</script>