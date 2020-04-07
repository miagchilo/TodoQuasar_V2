<template>
 
          <div class="row q-mb-sm"> 

          <q-input outlined  
          :rules="[val => !!val || 'Field is required']" 
          ref="name"
          :value="name"
          @input="$emit('update:name', $event)"
          label="Task name" 
          autofocus
          class="col" 
          clear-icon="close"

          clearable/>

           </div>

</template>

<script>
export default {
  props: ['name']
  
}
</script>

<style lang="stylus" scoped>

</style>
