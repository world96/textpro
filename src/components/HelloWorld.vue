<template>
  <div class="hello">
    <div>hello</div>
    <zsj-pagination />
    <zsj-cropper />
    <addFunc
      @getSumFromChild="getSumFromChild"
      :num1="num1"
      :num2="num2"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      num1: 5,
      num2: 6
    }
  },
  methods: {
    getSumFromChild(sum) {
      console.log('sum', sum)
    }
  }
}
</script>

<style scoped>
.hello {
  background: azure;
}
</style>
