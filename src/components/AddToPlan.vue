<script setup>
import { onMounted } from "vue";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
</script>

<template>
  <section>
      <div class="container">
        <div class="row">
          <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
            <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
              <div class="bg-gradient-secondary shadow-secondary border-radius-lg p-3">
                <h3 class="text-white text-success mb-0">Add to Plan</h3>
              </div>
            </div>
            <div class="card-body">
              <p class="pb-3">
                For further questions, including partnership opportunities,
                please email hello@creative-tim.com or contact using our
                contact form.
              </p>
              <form id="contact-form" method="post" autocomplete="off">
                <div class="card-body p-0 my-3">
                  <div class="row">
                    <div class="col-md-6">
                      <MaterialInput class="input-group-static mb-4" type="text" label="Full Name"
                        placeholder="Full Name" />
                    </div>
                    <div class="col-md-6 ps-md-2">
                      <MaterialInput class="input-group-static mb-4" type="email" label="Email"
                        placeholder="hello@creative-tim.com" />
                    </div>
                  </div>
                  <div class="form-group mb-0 mt-md-0 mt-4">
                    <MaterialTextArea id="message" class="input-group-static mb-4" :rows="6"
                      placeholder="Describe your problem in at least 250 characters">How can we help you?
                    </MaterialTextArea>
                  </div>
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <MaterialButton variant="gradient" color="secondary" class="mt-3 mb-0">Send Message
                      </MaterialButton>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  </section>
</template>