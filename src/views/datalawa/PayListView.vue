<template>
    <div>
        <h3>납부기록</h3>
        총 1건의 납부한 결과가 있습니다.
          <v-table class="content-box">
          <thead>
              <tr>
              <th>
                  납부상태
              </th>
              <th>
                  날짜
              </th>
              <th>
                  납부액
              </th>
              </tr>
          </thead>
          <tbody>
              <tr :key="i.idx" v-for="i in (0,20)">
                          <td><PayData :payox="payox"/>payox</td>
                          <td><PayData :date="date"/>date</td>
                          <td><PayData :cost="cost"/>cost</td>
              </tr>
          </tbody>
          </v-table>
    </div>
  </template>

<script>
import PayData from '@/components/PayData'

export default {
  components: {PayData},
  data () {
    return {
    }
  }
}
</script>
