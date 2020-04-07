<template>
     <q-card>
          
       <model-header>Add Task</model-header>
          <form @submit.prevent="submitForm">

           <q-card-section >
        <model-taskname ref="modelTaskName" :name.sync="taskToSubmit.name"></model-taskname>
        
        <model-duedate 
        :dueDate.sync="taskToSubmit.dueDate"
        
        ></model-duedate>

        <model-duetime 
        v-if="taskToSubmit.dueDate"
         :dueTime.sync="taskToSubmit.dueTime"></model-duetime>


        </q-card-section>
<model-button></model-button>
  
       
         </form>
      </q-card>

</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      taskToSubmit: {
          name: '',
          completed: false,
          dueDate: '',
          dueTime: ''
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      console.log('submit');
      this.$refs.modelTaskName.$refs.name.validate();
      if(!this.$refs.modelTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
     this.addTask(this.taskToSubmit);
     this.$emit('close')
    }
  },
  components: {
    'model-header' : require('components/Tasks/shared/Modelheader').default,
    'model-taskname' : require('components/Tasks/shared/ModelTaskName').default,
    'model-duedate' : require('components/Tasks/shared/ModelDueDate').default,
    'model-duetime' : require('components/Tasks/shared/ModelDueTime').default,
    'model-button' : require('components/Tasks/shared/ModelButtons').default
    
  }
}
</script>
