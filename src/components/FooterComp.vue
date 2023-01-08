<template>
    <div class="footer">
        <VContainer fluid>
            <v-row>
                <v-col class="" cols="12" sm="12" md="6" lg="3">
                    <v-img src="../assets/logoRed.png" max-height="150px" max-width="150px" />
                </v-col>
                <v-col cols="12" sm="12" md="6" lg="3" v-for="data in footerData" :key="data.title">
                    <h3 class="my-3">{{ data.title }}</h3>
                    <p class="my-2" v-for="link in data.links" :key="link.id">{{ link.link }}</p>
                </v-col>
            </v-row>

        </VContainer>

    </div>
</template>
<script>


export default {
    data() {
        return {
            footerData: [

                {
                    title: "Links",
                    links: [
                        { id: 1, link: "support@tripitaca.com" },
                        { id: 2, link: "+254729784455" },
                        { id: 3, link: "Jewel Complex, 5th Floor" },
                    ]
                }, {
                    title: "Contact",
                    links: [
                        { id: 4, link: "Places to Stay" },
                        { id: 5, link: "Insyder" },
                        { id: 6, link: "List Your Property" },
                        { id: 7, link: "Notifications" },
                        { id: 8, link: "My Offers" },]
                }, {
                    title: "Help Center",
                    links: [
                        { id: 4, link: "Profile" },
                        { id: 5, link: "About Us" },
                        { id: 6, link: "Service Fees Policy" },
                        { id: 7, link: "Terms & Conditions" },
                        { id: 8, link: "Refund & Cancellation Policy" },

                    ]
                },


            ],
        }
    }
}
</script>
<style>
.footer {
    height: 300px;
    background: #fff;
    padding: 1.5rem;
}
</style>