<template>
    <div class="list">
        <v-container fluid>
            <div class="title text-red-darken-1">
                <h1>
                    list with us
                </h1>
            </div>
            <v-row class="">
                <v-col md="4" sm="12" cols="12" class="col-container1">
                    <v-col>
                        <div class="packages_title">
                            <v-img src="../assets/icon3.png" max-height="30px" max-width="30px" class="mr-3" />
                            <h3 class="text-red-darken-1">Special Package</h3>
                        </div>

                        <p>Create your own packages and sell them directly to travelers, no agents, no middlemen.</p>
                    </v-col>
                    <v-col>
                        <div class="packages_title">
                            <v-img src="../assets/icon2.png" max-height="30px" max-width="30px" class="mr-3" />
                            <h3 class="text-red-darken-1">Financial Support</h3>
                        </div>
                        <p>Get immediate access to affordable credit and other financial services to help your business
                            get
                            back
                            on track.</p>
                    </v-col>
                </v-col>
                <v-col class="img_order" md="4" sm="12" cols="12">
                    <v-img src="../assets/Tripitaca.svg" alt="work" max-height="600px" />
                </v-col>
                <v-col md="4" sm="12" cols="12" class="col-container2">
                    <v-col>
                        <div class="packages_title">
                            <v-img src="../assets/icon1.png" max-height="30px" max-width="30px" class="mr-3" />
                            <h3 class="text-red-darken-1">See Incoming Travelers</h3>
                        </div>
                        <p>We'll notify you when travelers looking for properties like yours are coming to your area
                            increasing your chances of getting booked by 100%.</p>
                    </v-col>
                </v-col>
            </v-row>

        </v-container>
    </div>
</template>
<script>
export default {


}
</script>
<style>
.list {
    margin: 1.5rem;
    background: #FFFFFF;
    border-radius: 50px;
    box-shadow: 0px 10px 15px rgba(231, 4, 6, 0.2);
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0;

}

.packages_title {
    display: flex;
    flex-direction: row;
    margin: 1rem 0;
}

.col-container1 {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.col-container2 {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-self: center;

}

@media screen and (max-width:770px) {
    .img_order {
        order: 2 !important;
    }

    .col-container2 {
        order: 1 !important;
    }
}
</style>