<template>
  <div  class="row q-mb-sm">
    <q-input
    outlined
    label="Due date"
    :value='dueDate'
    clearable
    @input="$emit('update:dueDate', $event)"
   >

      <template v-slot:append>

        <q-icon name="event" class="cursor-pointer">

          <q-popup-proxy>

            <q-date @input="$emit('update:dueDate', $event)"   :value='dueDate' />

          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
</div>
</template>

<script>
export default {
  props: ['dueDate']
}
</script>
