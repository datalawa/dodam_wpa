<template>
    <div class="card background-shadow inout-root">
        <h3>입출차 기록 상세보기</h3>
          <v-table class="content-box">
          <thead>
              <tr>
              <th>
                  번호
              </th>
              <th>
                  날짜
              </th>
              <th>
                  동
              </th>
              <th>
                  호수
              </th>
              <th>
                  차종
              </th>
              <th>
                  구분
              </th>
              <th>
                  입차시간
              </th>
              <th>
                  출차시간
              </th>
              </tr>
          </thead>
          <tbody>
              <tr :key="i.idx" v-for="i in (0,20)">
                          <td>{{ i }}</td>
                          <td><InOutData :date="date"/>date</td>
                          <td><InOutData :dong="dong"/>dong</td>
                          <td><InOutData :ho="ho"/>ho</td>
                          <td><InOutData :kind="kind"/>kind</td>
                          <td><InOutData :visit="visit"/>visit</td>
                          <td><InOutData :intime="intime"/>intime</td>
                          <td><InOutData :outtime="outtime"/>outtime</td>
              </tr>
          </tbody>
          </v-table>
    </div>
  </template>

<script>
import InOutData from '@/components/InOutData'

export default {
  components: {InOutData},
  data () {
    return {

    }
  }
}
</script>

<style scoped>
.inout-root {
  padding: 20px;
  width: 100%;
}
</style>
