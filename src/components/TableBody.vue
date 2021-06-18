<template>
  <q-tr v-show="person.is_visible">
    <q-td class="text-left">
      <div>{{ person.name }}</div>
      <q-btn
        v-if="person.has_child"
        size="sm"
        color="primary"
        dense
        @click="expand(person.id)"
        :icon="person.expand ? 'expand_less' : 'expand_more'">
        {{ person.expand ? 'Hide' : 'Expand'}}
      </q-btn>
    </q-td>
    <q-td class="text-left">
      {{ person.age }}
    </q-td>
    <q-td class="text-left">
      {{ person.hobbies }}
    </q-td>
  </q-tr>
</template>
<script>

export default {
  name: 'TableBody',
  props: ['person'],
  methods: {
    expand(id) {
      this.$store.commit('persons/TOGGLE_EXPAND', id)
    }
  }
}
</script>
<style>

</style>