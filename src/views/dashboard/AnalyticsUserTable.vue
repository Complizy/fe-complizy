<script setup>
import { computed, defineProps, ref, unref } from 'vue'
import { VDataTable } from 'vuetify/labs/VDataTable'
import { useClientStore } from '../../stores/client'
import { useUserStore } from '../../stores/user'

const props = defineProps({
  search: String,
})

const client = useClientStore()
const user = useUserStore()
const editDialog = ref(false)
let editClient = ref({})

const userListTable =  computed(() => {
  let userList = user.users.map(user => {
    const findClient = client.clients.find(c => c.id === user.client_id)

    user.client_name = findClient ? `${findClient.name} - ${findClient.typeName}` : null
  
    return user 
  })

  client.clients.forEach(client => {
    const isClient = userList.find(user => user.client_id === client.id)
    if(!isClient){
      userList.push(
        {
          typeName: client.typeName,
          client_id: client.id,
          client_name: `${client.name} - ${client.typeName}`,
          noItem: true,

        },
      )
    }
  })
  if(props.search){
    return userList.filter(user => user.client_name.toLowerCase().includes(props.search.toLowerCase()))
  }
  
  return userList
})


const editItem = ({ items }) => {
  const clientId  = items[0].raw.client_id
  const findClient = client.findById(clientId)

  editClient.value = { ...findClient }
  editDialog.value = true 

}

const updateClient = async () => {
  await client.update(unref(editClient))
  editDialog.value = false
}

const headers = [
  {
    title: 'USER NAME',
    key: 'name',
  },
  {
    title: 'COUNTRY',
    key: 'country',
  },
  {
    title: 'START DATE',
    key: 'start_date',
  },
  {
    title: 'END DATE',
    key: 'end_date',
  },
  {
    title: 'SIGNALS',
    key: 'signal',
  },
  {
    title: 'STATUS',
    key: 'status',
  },
  {
    title: 'RISCK RATING',
    key: 'risck.value',
  },

  // {
  //   title: '',
  //   key: 'actions',
  // },

  // {
  //   title: 'client_id',
  //   key: 'client_id',
  // },
]

const groupBy = [{ key: 'client_name' }]

const resolveSiganlVariant = status => {
  if (status === 1)
    return { color: 'warning', name: 'Questions' }
  else if (status === 2)
    return { color: 'error', name: 'Inactive/Buncrupt' }
  else
    return { color: null }
}

const resolveRisckVariant = status => {
  if (status === 1)
    return { color: 'success' }
  else if (status === 2)
    return { color: 'warning' }
  else if (status === 3)
    return { color: 'error' }
  else
    return { color: null }
}

const resolveStatusVariant = status => {
  if (status === 1)
    return { color: '', name: 'Not started' }
  else if (status === 2)
    return { color: 'info', name: 'In progress' }
  else if (status === 3)
    return { color: 'success', name: 'Completed' }
  else
    return { color: 'info' }
}
</script>

<template>
  <VDataTable
    :headers="headers"
    :items="userListTable"
    :items-per-page="50"
    :group-by="groupBy"
  >
    <template #group-header="{ item, columns, toggleGroup, isGroupOpen }">
      <tr>
        <td :colspan="columns.length">
          <div class="d-flex align-center">
            <VBtn
              v-if="!item.items[0].value.noItem "
              size="small"
              variant="text"
              :icon="isGroupOpen(item) ? '$expand' : '$next'"
              @click="toggleGroup(item)"
            />
            <VBtn
              v-else
              size="small"
              variant="text"
              disabled="true"
              :icon="isGroupOpen(item) ? '$expand' : '$next'"
            />
            {{ item.value }} ({{ item.items[0].value.noItem ? 0 : item.items.length }})
            <span class="ml-auto">
              <IconBtn @click="editItem(item)">
                <VIcon icon="mdi-pencil-outline" />
              </IconBtn>
            </span>
          </div>
        </td>
      </tr>
    </template>
    <!-- full name -->
    <template #item.name="{ item }">
      <div class="d-flex align-center">
        <!--
          <VAvatar
          size="32"
          :color="item.raw.avatar ? '' : 'primary'"
          :class="item.raw.avatar ? '' : 'v-avatar-light-bg primary--text'"
          :variant="!item.raw.avatar ? 'tonal' : undefined"
          >
          <VImg
          v-if="item.raw.avatar"
          :src="item.raw.avatar"
          />
          <span v-else>{{ avatarText(item.raw.full_name) }}</span>
          </VAvatar> 
        -->
        <div class="d-flex flex-column ms-3">
          <span class="d-block font-weight-medium text-high-emphasis text-truncate">{{ item.raw.name }}</span>
          <small>{{ item.raw.kvk }}</small>
        </div>
      </div>
    </template>


    <template #item.status="{ item }">
      <VChip
        :color="resolveStatusVariant(item.raw.status).color"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveStatusVariant(item.raw.status).name }}
        <VAvatar
          v-if="item.raw.status_step"
          color="secondary"
          size="x-small"
          end
        >
          {{ item.raw.status_step }}
        </VAvatar>
      </VChip>
    </template>

    <template #item.signal="{ item }">
      <VChip
        v-if="resolveSiganlVariant(item.raw.status).color"
        :color="resolveSiganlVariant(item.raw.status).color"
        size="small"
        class="font-weight-medium"
      >
        {{ resolveSiganlVariant(item.raw.status).name }}
      </VChip>
    </template>


    <template #item.risck.value="{ item }">
      <VChip
        :color="resolveRisckVariant(item.raw.risck.type).color"
        size="small"
        class="font-weight-medium"
      >
        {{ item.raw.risck.value }}
      </VChip>
    </template>
    <!--
      <template #item.actions="{ item }">
      <div class="d-flex">
      <IconBtn @click="editItem(item.raw)">
      <VIcon icon="mdi-pencil-outline" />
      </IconBtn>
      </div>
      </template> 
    -->
  </VDataTable>
  <VDialog
    v-model="editDialog"
    persistent
    class="v-dialog-sm"
  >
    <!-- Dialog Content -->
    <VCard title="Add new client">
      <DialogCloseBtn
        variant="text"
        size="small"
        @click="editDialog = false"
      />

      <VForm
        class="pa-5"
        @submit.prevent="() => {}"
      >
        <VRow>
          <VCol cols="12">
            <VTextField
              v-model="editClient.name"
              label="Name"
              placeholder="Name"
            />
          </VCol>

          <VCol cols="12">
            <VTextField
              v-model="editClient.email"
              label="Email"
              type="email"
              placeholder="Email"
            />
          </VCol>

          <VCol cols="12">
            <VTextField
              v-model="editClient.phone"
              label="Mobile"
              type="number"
              placeholder="Number"
            />
          </VCol>
          <VCol cols="12">
            <VSelect
              v-model="editClient.type_id"
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
          @click="editDialog = false"
        >
          Close
        </VBtn>
        <VBtn
          color="success"
          @click="updateClient"
        >
          Update
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>
</template>
