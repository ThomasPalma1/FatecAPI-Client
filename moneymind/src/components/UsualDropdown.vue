<template>
    <div class="dropdown">
      <label class="label" for="dropdown">{{ title }}</label>
      <select class="selector" id="dropdown">
        <option class="option" v-for="option in options" :value="option.value">{{ option.label }}</option>
      </select>
    </div>
  </template>
  
<script lang="ts">
export default {
    name: 'dropdown',
    props: {
        title: String,
    },
    data() {
        return {
            isOpen: false,
            options: [
                { label: 'ANDRE DO CARALHO', value: 'option1' },
                { label: 'TED', value: 'option2' },
                { label: 'DOC', value: 'option3' },
                { label: 'Cambio' , value: 'option4' }
            ],
            
        };
    },
};
</script>
  
<style>
.dropdown{
  position: absolute;
  width: 18.375rem;
  padding: 1.2rem;
  background-color: #282A30;
  top: calc(100% + 2rem);
  left: 50%;
  transform: translateX(-50%);
  border-radius: 5%;
}
.dropdown .selector{
  width: 10.50rem;
  color: #CF9F36;
  background: rgba(0, 0, 0, 0.3);
  border: 1.5px solid black;
  padding: 0.25rem;
  left: 5%;
}
.dropdown .label{
  color: #CF9F36;
}
.dropdown .selector .option{
  background-color: #D9D9D9;
  color: black;
}
.dropdown .selector .option:hover {
  background-color: black;
  color: yellow;
}
</style>
<!-- <style>
dropdown-label {
  color: black;
  font-weight: bold;
  margin-right: 1rem;
}

.dropdown-select {
  background-color: yellow;
  color: black;
  border: 2px solid black;
  padding: 0.5rem;
}

.dropdown-option {
  background-color: yellow;
  color: black;
}

.dropdown-option:hover {
  background-color: black;
  color: yellow;
}
</style> -->