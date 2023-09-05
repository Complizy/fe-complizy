<script setup>
import AnalyticsUserTable from '@/views/dashboard/AnalyticsUserTable.vue'
import { unref } from 'vue'
import { useClientStore } from '../stores/client'


const client = useClientStore()

client.getAll()

const isDialogVisible = ref(false)

const clientObject = {
  name: null,
  email: null,
  type_id: null,
  phone: null,
}

const search = ref(null)
let newClient = ref({ ...clientObject })

const saveClient =  async () => {
  await client.add(unref(newClient))
  isDialogVisible.value = false
  newClient.value.name = null
  newClient.value.type_id = null
  newClient.value.phone = null
  newClient.value.email = null
 
}
</script>

<template>
  <VRow class="match-height">
    <VCol cols="12">
      <VCard class="pa-5">
        <VCardText>
          <VRow>
            <VCol cols="2">
              <VBtn 
                color="secondary"
                variant="outlined"
              >
                filter
              </VBtn>
            </VCol>
            <VCol
              cols="8"
              offset-md="4"
              md="4"
            >
              <VTextField
                v-model="search"
                density="compact"
                label="Search"
                append-inner-icon="mdi-magnify"
                single-line
                hide-details
                dense
                outlined
              />
            </VCol>
        
            <VCol cols="2">
              <VDialog
                v-model="isDialogVisible"
                persistent
                class="v-dialog-sm"
              >
                <!-- Dialog Activator -->
                <template #activator="{ props }">
                  <VBtn
                    v-bind="props"
                    block
                  >
                    add client
                  </VBtn>
                </template>

                <!-- Dialog Content -->
                <VCard title="Add new client">
                  <DialogCloseBtn
                    variant="text"
                    size="small"
                    @click="isDialogVisible = false"
                  />

                  <VForm
                    class="pa-5"
                    @submit.prevent="() => {}"
                  >
                    <VRow>
                      <VCol cols="12">
                        <VTextField
                          v-model="newClient.name"
                          label="Name"
                          placeholder="Name"
                        />
                      </VCol>

                      <VCol cols="12">
                        <VTextField
                          v-model="newClient.email"
                          label="Email"
                          type="email"
                          placeholder="Email"
                        />
                      </VCol>

                      <VCol cols="12">
                        <VTextField
                          v-model="newClient.phone"
                          label="Mobile"
                          type="number"
                          placeholder="Number"
                        />
                      </VCol>

                      <VCol cols="12">
                        <VSelect
                          v-model="newClient.type_id"
                          :items="client.types"
                          item-title="name"
                          item-value="id"
                          label="Category"
                        />
                      </VCol>
                    </VRow>
                  </VForm>

                  <VCardActions>
                    <VSpacer />
                    <VBtn
                      color="error"
                      @click="isDialogVisible = false"
                    >
                      Close
                    </VBtn>
                    <VBtn
                      color="success"
                      @click="saveClient"
                    >
                      Save
                    </VBtn>
                  </VCardActions>
                </VCard>
              </VDialog>
            </VCol>
          </VRow>
        </VCardText>
        <AnalyticsUserTable
          v-if="client.isLoad"
          :search="search"
        />
        <div
          v-else
          class="d-flex justify-center pa-3"
        >
          <VProgressCircular
            :size="40"
            color="primary"
            indeterminate
          />
        </div>
      </VCard>
    </VCol>
  </VRow>
</template>
