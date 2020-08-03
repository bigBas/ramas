<template>
    <div class="container cont-log-things">
        <h1 class="serv-title text-center">Sistema de censo</h1>

        <div
            class="input-group mb-3 col-12 col-sm-9 col-md-8 col-lg-5 my-4 mx-auto"
        >
            <div class="input-group-prepend px-auto gp-inp">
                <span class="input-group-text icon-login-form pl-3 pr-0">
                    <font-awesome-icon icon="user" class="user-icon-input" />
                </span>
            </div>
            <input
                type="text"
                class="form-control input-login-form shadow-none py-4"
                placeholder="Usuario"
            />
        </div>

        <div class="input-group mb-3 col-12 col-sm-9 col-md-8 col-lg-5 my-auto mx-auto">
            
            <div class="input-group-prepend px-auto gp-inp">
                <span class="input-group-text icon-login-form pl-3 pr-0">
                    <font-awesome-icon icon="lock" class="user-icon-input" />
                </span>
            </div>
            
            <input
                type="password"
                class="form-control input-login-form shadow-none py-4"
                placeholder="Contraseña"
            />
        
        </div>

        <div class="d-flex justify-content-center">
          <button class="btn btn-success btn-login mt-4">
              Iniciar Sesión
          </button>
        </div>

        <div
            class="alert alert-danger mt-4 mx-auto text-center"
            style="display: none; width:80%"
            id="alertErr"
            role="alert"
        >
            Usuario o contraseña invalidos
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            user: '',
            password: '',
        }
    },
    methods: {
        
    },
}
</script>

<style scoped>
.btn-login {
    width: 170px;
    height: 45px;
}
.input-login-form {
    border: 0;
    border-top: 1px solid #bdbdbd;
    border-right: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    height: 40px;
    padding-left: 10px;
    outline: 0;
}

.icon-login-form {
    border: 0;
    border-top: 1px solid #bdbdbd;
    border-left: 1px solid #bdbdbd;
    border-bottom: 1px solid #bdbdbd;
    width: 40px;
    background-color: #fff;
    color: #bdbdbd;
}

.cont-log-things {
    padding: 30px;
    margin-top: 15px;
}
@media (max-width: 350px) {
    .serv-title text-center {
        font-size: 25px;
    }
}
</style>
