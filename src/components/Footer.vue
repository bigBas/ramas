<template>
    <footer id="footer">
        <div class="separador"></div>
            <div class="contenedor-footer p-3">
                <div class="cont-text-foo text-white text-center">
                    <p>
                        Hecho en México, todos los derechos reservados 2020.
                        <br />
                        Esta página puede ser reproducida con fines no lucrativos,
                        siempre y cuando no se mutile, se cite la fuente
                        <br />
                        completa y su dirección electrónica. De otra forma, requiere
                        permiso previo por escrito de la institución.
                    </p>
                </div>
        </div>
    </footer>
</template>

<style scoped>
* {
    margin: 0px;
    box-sizing: border-box;
    padding: 0px;
}
#footer {
    bottom: 0px;
    position: absolute;
    width: 100%;
}
.separador {
    width: 100%;
    background: #2e5795;
    height: 1rem;
}

.contenedor-footer {
    width: 100%;
}
.cont-text-foo {
    font-size: 12px;
}
footer {
    background: #1b3d70;
}
</style>
