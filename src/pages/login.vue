<script setup>
import logo from '@images/logo-complizy.svg?raw'
import authV1MaskDark from '@images/pages/auth-v1-mask-dark.png'
import authV1MaskLight from '@images/pages/auth-v1-mask-light.png'
import { useRouter } from 'vue-router'
import { useTheme } from 'vuetify'

const form = ref({
  name: '',
  password: '',
  remember: false,
})

const router = useRouter()
const error = ref(false)

const login = () => {
  const isValid = form.value.name === 'complizy' && form.value.password === 'complizy'

  if(isValid){
    localStorage.setItem('auth', true)
    router.push('/')
  }else{
    error.value = true
  }
}

const vuetifyTheme = useTheme()

const authThemeMask = computed(() => {
  return vuetifyTheme.global.name.value === 'light' ? authV1MaskLight : authV1MaskDark
})

const isPasswordVisible = ref(false)
</script>

<template>
  <div class="auth-wrapper d-flex align-center justify-center pa-4">
    <VCard
      class="auth-card pa-4 pt-7"
      max-width="448"
    >
      <VCardItem class="justify-center">
        <template #prepend>
          <div v-html="logo" />
        </template>

        <!--
          <VCardTitle class="font-weight-semibold text-2xl text-uppercase">
          Materio 2
          </VCardTitle> 
        -->
      </VCardItem>

      <VCardText class="pt-2">
        <!--
          <h5 class="text-h5 font-weight-semibold mb-1">
          Welcome to Materio! 👋🏻
          </h5> 
        -->
        <p class="mb-0">
          Please sign-in to your account and start the adventure
        </p>
      </VCardText>
    
  
      <VCardText>
        <VAlert
          v-if="error"
          variant="tonal"
          color="error"
          class="mb-4"
        >
          Incorrect login data
        </VAlert>
        <VForm @submit.prevent="login">
          <VRow>
            <!-- email -->
            <VCol cols="12">
              <VTextField
                v-model="form.name"
                label="Name"
                type="text"
              />
            </VCol>
       
            <!-- password -->
            <VCol cols="12">
              <VTextField
                v-model="form.password"
                label="Password"
                :type="isPasswordVisible ? 'text' : 'password'"
                :append-inner-icon="isPasswordVisible ? 'mdi-eye-off-outline' : 'mdi-eye-outline'"
                @click:append-inner="isPasswordVisible = !isPasswordVisible"
              />

              <!-- remember me checkbox -->
              <div class="d-flex align-center justify-space-between flex-wrap mt-1 mb-4">
                <!--
                  <VCheckbox
                  v-model="form.remember"
                  label="Remember me"
                  />

                  <a
                  class="ms-2 mb-1"
                  href="javascript:void(0)"
                  >
                  Forgot Password?
                  </a> 
                -->
              </div>

              <!-- login button -->
              <VBtn
                block
                type="submit"
              >
                Login
              </VBtn>
            </VCol>

            <!-- create account -->
            <!--
              <VCol
              cols="12"
              class="text-center text-base"
              >
              <span>New on our platform?</span>
              <RouterLink
              class="text-primary ms-2"
              to="/register"
              >
              Create an account
              </RouterLink>
              </VCol> 
            -->

            <!--
              <VCol
              cols="12"
              class="d-flex align-center"
              >
              <VDivider />
              <span class="mx-4">or</span>
              <VDivider />
              </VCol> 
            -->

            <!--
              auth providers
              <VCol
              cols="12"
              class="text-center"
              >
              <AuthProvider />
              </VCol> 
            -->
          </VRow>
        </VForm>
      </VCardText>
    </VCard>
  </div>
</template>

<style lang="scss">
@use "@core/scss/pages/page-auth.scss";
</style>
