<template>
    <header id="iniLetter">
        <div class="container-fluid header-h">
            <div class="col-4 offset-1 d-inline-flex p-0 align-items-center">
                <a href="https://www.unam.mx/"
                    ><img
                        src="../img/Logo-UNAM.png"
                        class="img-fluid"
                        alt="Logo UNAM"
                /></a>
            </div>
            <div
                class="col-4  offset-2 d-inline-flex justify-content-end p-0 align-items-center"
            >
                <a href="http://www.acatlan.unam.mx/">
                    <img
                        src="../img/logo_fesa.png"
                        class="img-fluid"
                        alt="Logo Fes Acatlán"
                    />
                </a>
            </div>
        </div>
<!-- 
        <div class="header-f">
            <nav class="navbar navbar-expand-lg navbar-dark container">
                <a class="navbar-brand">USUARIO</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Añadir equipo</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Consultar</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#"><span class="badge badge-danger p-2">Cerrar Sesión</span></a>
                        </li>
                    </ul>
                </div>

            </nav>
        </div>
-->

    </header>
</template>

<script>

export default {
    data() {
        return {}
    },
    methods: {
        
    },
}

</script>
<style scoped>
.header-h {
    /* background: #1b3d70; */
    background: #1b3d70;
    padding: 1rem 0;
}

.contenedor-header {
    padding: 1rem 0;
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.contenedor-img {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.contenedor-img img {
    max-width: 100%;
}

.header-f {
    padding: 0.5rem 0;
    background-color: #bb8800;

}
#info {
    color: white;
}
.sesion {
    margin: 0.5rem;
    line-height: 0.5rem !important;
}
</style>
