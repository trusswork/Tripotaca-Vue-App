<template>
    <v-container fluid class="header_container">
        <v-row>
            <v-col col="12">
                <v-card class="mx-auto rounded-xl flat">
                    <v-img src="../assets/Bg.jpg" height="600px" max-width="100%" cover />
                    <v-card-title class="header_content mx-auto">
                        <h1 class="title1">Let get Trippy</h1>
                        <p>Start paying for your trips in installments Today!</p>
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Header",
}
</script>
<style>
.header_container {
    margin-top: 64px;
}

.header_content {
    position: absolute;
    top: 25%;
    right: 20%;
    margin-right: -50%;
    height: 300px;
    color: #fff;
    display: flex;

    flex-direction: column;
    backdrop-filter: blur(2px);
    border-radius: 2px;

}

.img-header {
    box-shadow: 0px 10px 15px rgba(231, 4, 6, 0.2);
}

.header_content h1 {
    font-weight: 600;
    font-size: 120px;
    line-height: 192px;
}

.header_content p {
    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
}

@media screen and (max-width:770px) {
    .header_content {
        height: auto;
        width: auto;
        top: 40%;
        left: 1rem;
        backdrop-filter: .5px;
        overflow-x: none;
    }

    .header_content h1 {
        font-weight: 500;
        font-size: 40px;
        line-height: 60px;
    }

    .header_content p {
        font-weight: 500;
        font-size: 16px;
        line-height: 32px;
    }

}
</style>