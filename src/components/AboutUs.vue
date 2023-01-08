<template>
    <div class="about">
        <v-container fluid>
            <div class="title text-red-darken-1">
                <h1>
                    Why Trippy
                </h1>
            </div>
            <v-row no-gutters>
                <v-col class="packages" cols="12" sm="12" md="6">
                    <v-col>
                        <h3 class="text-red-darken-1 py-1">Packages</h3>
                        <div class="line" />
                        <p>Customized packages for you. <br /> Our hosts and hotels can customize a package for you
                            based on your individual needs.</p>
                    </v-col>
                    <v-col>
                        <h3 class="text-red-darken-1 py-1">Flexible Payments</h3>
                        <div class="line" />
                        <p>Pay in installments. <br /> You don't have to break the bank to travel, you can now pay for
                            your trips in installments either before or after departure at a 0% interest fee.</p>
                    </v-col>
                    <v-col>
                        <h3 class="text-red-darken-1 py-1">Emergency Booking</h3>
                        <div class="line" />
                        <p>For tonight Only. <br /> Are you in need of a place to stay at the last minute?
                            Get up to 50% off bookings made after 9 p.m. For that night only!</p>
                    </v-col>

                </v-col>
                <v-col cols="12" sm="12" md="6">
                    <v-img src="../assets/About-us.jpeg" max-height="600px" max-width="650px">
                    </v-img>

                </v-col>
            </v-row>

        </v-container>


    </div>
</template>
<script>

export default {
    name: "AboutUs",

}
</script>
<style>
.about {
    margin: 1.5rem;
    background: #FFFFFF;
    border-radius: 50px;
    box-shadow: 0px 10px 15px rgba(231, 4, 6, 0.2);
}


.line {
    width: 30px;
    height: 2px;
    background: #C1040C;
    margin-bottom: 1rem;
}

.title {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;

}

.packages {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
</style>