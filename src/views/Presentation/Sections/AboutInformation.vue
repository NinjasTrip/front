<script setup>
// example components
import DefaultInfoCard from "@/examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "@/examples/cards/blogCards/CenteredBlogCard.vue";
</script>
<template>
    <section class="py-7">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6">
                    <div class="row justify-content-start">
                        <DefaultInfoCard
                            color="info"
                            icon="public"
                            title="Connects Every Traveler"
                            description="The aim is to enhance the travel experience more interconnected for people from all walks of life."
                        />
                        <DefaultInfoCard
                            color="info"
                            icon="payments"
                            title="Payments do not need"
                            description="Make your trip beautiful, easier and more enjoyable,for free"
                        />
                    </div>
                    <div class="row justify-content-start mt-4">
                        <DefaultInfoCard
                            color="info"
                            icon="apps"
                            title="Easy to create plan"
                            description="We get insulted by others, lose trust for those We get back freezes"
                        />
                        <DefaultInfoCard
                            color="info"
                            icon="3p"
                            title="Easy to make Diary"
                            description="We get insulted by others, lose trust for those We get back freezes"
                        />
                    </div>
                </div>
                <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
                    <CenteredBlogCard
                        image="https://media.istockphoto.com/id/155150766/photo/passenger-jet-airplane-flying-above-clouds.jpg?s=612x612&w=0&k=20&c=DjBqo2rZeQvU-NkC1xRdznpXgcAljXEll3T7SdUFINE=&auto=format&fit=crop&w=1950&q=80"
                        title="NinJaTrip's Recommends"
                        description="Website visitors today demand a frictionless user expericence — especially when using search. Because of the hight standards."
                    />
                </div>
            </div>
        </div>
    </section>
</template>
